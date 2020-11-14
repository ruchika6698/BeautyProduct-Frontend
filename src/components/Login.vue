<template>
  <div class="container">
    <div class="login">Sign In</div>
    <div class="form-container">
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <div class="logoDiv"><img alt="Login logo" class="logo" align-items="center" src="../assets/LoginLogo.jpg"></div>
            <br/><br/>
        <md-field :class="getValidationClass('EmailId')">
          <label for="EmailId">Email Id</label>
          <md-input
            name="EmailId"
            class="EmailId"
            placeholder="Enter a Email Address"
            v-model="form.EmailId"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.EmailId.required"
            >EmailId is required</span
          >
          <span class="md-error" v-else-if="!$v.form.EmailId.minlength"
            >EmailId should have at least 3 characters</span
          >
        </md-field>
        <md-field :class="getValidationClass('Password')">
          <label for="Password">Password</label>
          <md-input
            name="Password"
            class="Password"
            placeholder="Enter a Password"
            v-model="form.Password"
            type="password"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.Password.required"
            >Password is required</span
          >
          <span class="md-error" v-else-if="!$v.form.Password.minlength"
            >Invalid Password</span
          >
        </md-field>

        <md-card-actions class="button">
          <md-button
            class="md-dense md-primary"
            href="/register"
            >Create Account</md-button
          >
          <md-button
            type="submit"
            class="md-raised md-primary"
            :disabled="sending"
            >Sign in</md-button
          >
        </md-card-actions>
      </form>
    </div>
    <md-snackbar
      :md-position="position"
      :md-active.sync="isLogin"
      md-persistent
    >
      <span>Login Successful!</span>
      <md-button type="submit" class="md-primary" :disabled="sending"
        >Ok</md-button
      >
    </md-snackbar>
    <md-snackbar
      :md-position="position"
      :md-active.sync="invalidCredentials"
      md-persistent
    >
      <span>Invalid Credentials!</span>
      <md-button class="md-primary" @click="invalidCredentials = false"
        >Ok</md-button
      >
    </md-snackbar>
  </div>
</template>

<script>
import userService from "../services/userService.js";
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "Login",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        EmailId: null,
        Password: null
      },
      position: "left",
      sending: false,
      isLogin: false,
      invalidCredentials: false,
      token: null
    };
  },
  validations: {
    form: {
      EmailId: {
        required,
        minLength: minLength(6),
      },
      Password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    login() {
      this.sending = true;
      let user = {
        emailId: this.form.EmailId,
        password: this.form.Password,
        cartId: ""
      };
      userService
        .login(user)
        .then(result => {
          if (result.status == "200") {
            this.isLogin = true;
            console.log("Logged In", result.data);
            localStorage.setItem("Token", result.data.jsonToken);
            localStorage.setItem(
              "First Name",
              result.data.data.firstName
            );
            localStorage.setItem("User Role", result.data.data.userRole);
            localStorage.setItem("Last Name", result.data.data.lastName);
            localStorage.setItem("Email Id", result.data.data.emailId);
            window.location.href = "/dashboard";
          }
        })
        .then(() => {
          this.sending = false;
          this.clearForm();
        })
        .catch(error => {
          console.log("Error:", error.response.status);
          if (error.response.status == "401") {
            this.invalidCredentials = true;
            this.clearForm();
            this.sending = false;
          }
        });
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.login();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.EmailId = null;
      this.form.Password = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  left: 30.5vw;
  top: 11vh;
  padding-top: 2%;
  padding-bottom: 5%;
  width: 40%;
  border-radius: 5px;
  border: 1px solid #913C4D;    
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 2px rgba($color: #913C4D, $alpha: 0.2);
}
.login {
    margin-top: 4vh;
    color: #913C4D;
    font-size: 26px;
    font-weight: bold;
}
.logo{
    width: 120px;
    height: 120px;
    border-radius: 50px;
    margin-top: 10%;
}
.md-layout{
    display:flex;
    justify-content: center;
    align-items: center !important;
}
.login-helper {
  font-size: 17px;
  position: relative;
  top: 7vh;
}
.form-container {
  position: relative;
  top: 8%;
  left: 10%;
  width: 80%;
}
.md-card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 3vh;
  width: 100vw;
}
//Ipad Horizontal
@media (min-width: 1000px) and (max-width: 1024px) {
    .container{
        margin-top: 170px;
    }
  .logo{
      margin-bottom:50px ;
  }
}
@media screen and (max-width: 540px) {
  .container {
    width: 70vw;
    height: 100vw;
  }
}
</style>
