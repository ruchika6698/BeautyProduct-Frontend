<template>
  <div class="container">
    <div class="add">Add Product</div>
    <div class="form-container">
      <form novalidate class="md-layout" @submit.prevent="validateProduct">
        <br /><br />
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
            class="ProductBrand"
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
            class="ProductDescription"
            placeholder="Enter Product Description "
            v-model="form.ProductDescription"
            :disabled="sending"
          ></md-input>

          <span class="md-error" v-if="!$v.form.ProductDescription.required"
            >Product Description is required</span
          >
          <span
            class="md-error"
            v-else-if="!$v.form.ProductDescription.minlength"
            >Product Description should have at least 3 characters</span
          >
        </md-field>
        <md-field :class="getValidationClass('Price')">
          <label for="Price ">Price </label>
          <md-input
            name="Price "
            class="Price"
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
          <input type="file" @change="onFileSelected" />
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
import productServices from "../services/productServices.js";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "AddProduct",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        ProductName: null,
        ProductBrand : null,
        ProductDescription :null,
        Price: null,
        Image : null
      },
      position: "left",
      sending: false,
      isSubmit: false,
      invalidCredentials: false,
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
       onFileSelected(event){
       //store the image details
       this.image = event.target.files[0];
       console.log(this.image);
       // for url purpose
       let image = event.target.files[0];
       let reader = new FileReader();
       reader.readAsDataURL(image);
        console.log(reader);
       reader.onload = event => {
        this.url = event.target.result;
       }
   },

  addProduct() {
      this.sending = true;
      var formData = new FormData();
      formData.append("productName", this.form.ProductName);
      formData.append("productBrand", this.form.ProductBrand);
      formData.append("productDescription", this.form.ProductDescription);
      formData.append("price", this.form.Price);
      formData.append("image", this.image);
      console.log("Form Data",formData);
      productServices
        .addProduct(formData)
        .then(result => {
          if (result.status == "200") {
            this.isSubmit = true;
            console.log("Add Product", result);
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 3000);
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
    validateProduct() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.addProduct();
      }
    },
    clearForm() {
      this.$v.$reset();
      this.ProductName = null;
      this.ProductBrand = null;
      this.ProductDescription = null;
      this.Price = null;
      this.Image = null;
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
  border: 1px solid #913c4d;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 2px rgba($color: #913c4d, $alpha: 0.2);
}
.add {
  margin-top: 4vh;
  margin-bottom: 4vh;
  color: #913c4d;
  font-size: 26px;
  font-weight: bold;
}
.logo {
  width: 120px;
  height: 120px;
  border-radius: 50px;
  margin-top: 10%;
}
.md-layout {
  display: flex;
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
  .container {
    margin-top: 170px;
  }
  .logo {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 540px) {
  .container {
    width: 70vw;
    height: 100vw;
  }
}
</style>
