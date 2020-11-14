<template>
  <div class="container">
    <div class="add">Add Product</div>
    <div class="form-container">
      <form novalidate class="md-layout" @submit.prevent="validateUser">
            <br/><br/>
        <md-field :class="getValidationClass('ProductName')">
          <label for="ProductName">Product Name</label>
          <md-input
            name="ProductName"
            class="ProductName"
            placeholder="Enter Product Name"
            v-model="form.ProductName"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.ProductName.required"
            >Product Name is required</span
          >
          <span class="md-error" v-else-if="!$v.form.ProductName.minlength"
            >Product Name should have at least 3 characters</span
          >
        </md-field>

        <md-field :class="getValidationClass('ProductBrand')">
          <label for="ProductBrand ">Product Brand</label>
          <md-input
            name="ProductBrand "
            class="ProductBrand "
            placeholder="Enter Product Brand "
            v-model="form.ProductBrand"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.ProductBrand.required"
            >Product Brand is required</span
          >
          <span class="md-error" v-else-if="!$v.form.ProductBrand.minlength"
            >Product Brand should have at least 3 characters</span
          >
        </md-field>
        
        <md-field :class="getValidationClass('ProductDescription')">
          <label for="ProductDescription ">Product Description </label>
          <md-input
            name="ProductDescription"
            class="ProductDescription "
            placeholder="Enter Product Description "
            v-model="form.ProductDescription"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.ProductDescription.required"
            >Product Description is required</span
          >
          <span class="md-error" v-else-if="!$v.form.ProductDescription.minlength"
            >Product Description  should have at least 3 characters</span
          >
        </md-field>
        <md-field :class="getValidationClass('Price')">
          <label for="Price ">Price </label>
          <md-input
            name="Price "
            class="Price "
            placeholder="Enter Price "
            v-model="form.Price"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.Price.required"
            >Price is required</span
          >
          
        </md-field>
        <div>
          <label for="Image" class="Image">Image :</label>
          <input type="file" @change="onFileChange">
        </div>

        <md-card-actions class="button">
          <md-button
            type="submit"
            class="md-raised md-primary"
            :disabled="sending"
            >Submit</md-button
          >
        </md-card-actions>
      </form>
    </div>
    <md-snackbar
      :md-position="position"
      :md-active.sync="isSubmit"
      md-persistent
    >
      <span>Data added successful</span>
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
  name: "Add Product",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        ProductName: null,
        ProductBrand : null,
        ProductDescription :null,
        EmailId: null,
        Image : null
      },
      position: "left",
      sending: false,
      isSubmit: false,
      invalidCredentials: false,
      token: null
    };
  },
  validations: {
    form: {
     ProductName: {
        required,
        minLength: minLength(3)
      },
      ProductBrand : {
        required,
        minLength: minLength(3)
      },
     ProductDescription : {
        required,
        minLength: minLength(3)
      },
      Price : {
        required,
      },
      Image : {
        required,
      }
    }
  },
  methods: {
       onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    register() {
      this.sending = true;
      let user = {
        firstName: this.form.FirstName,
        lastName: this.form.LastName,
        userRole:this.form.UserRole,
        emailId: this.form.EmailId,
        password: this.form.Password,
      };
      userService
        .register(user)
        .then(result => {
          if (result.status == "200") {
            this.isRegister = true;
            console.log("Registration", result.data);
            window.location.href = "/";
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
        this.register();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.ProductName = null;
      this.form.ProductBrand = null;
      this.form.ProductDescription = null;
      this.form.Price = null;
      this.form.Image = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  left: 30.5vw;
  top: 6vh;
  padding-top: 2%;
  padding-bottom: 5%;
  margin-bottom: 5%;
  width: 40%;
  border-radius: 5px;
  border: 1px solid #913C4D;    
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 2px rgba($color: #913C4D, $alpha: 0.2);
}
.add {
    margin-top: 4vh;
    margin-bottom: 4vh;
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
