<template>
  <div class="container">
    <div class="add">Update Product</div>
    <div class="form-container">
      <form novalidate class="md-layout">
        <br /><br />
        <md-field>
          <label for="ProductName">Product Id</label>
          <md-input
            name="ProductId"
            class="ProductName"
          ></md-input>
        </md-field>

        <md-field>
          <label for="ProductName">Product Name</label>
          <md-input
            name="ProductName"
            class="ProductName"
          ></md-input>
        </md-field>

        <md-field>
          <label for="ProductBrand ">Product Brand</label>
          <md-input
            name="ProductBrand"
            class="ProductBrand"
          ></md-input>
        </md-field>

        <md-field>
          <label for="ProductDescription ">Product Description </label>
          <md-input
            name="ProductDescription"
            class="ProductDescription"
          ></md-input>
        </md-field>
        <md-field>
          <label for="Price ">Price </label>
          <md-input
            name="Price "
            class="Price"
          ></md-input>
        </md-field>
        <div class="ImageDiv">
          <label for="Image" class="Image">Image :</label>
          <input type="file" @change="onFileSelected" />
        </div>

        <md-card-actions class="button">
          <md-button
            type="submit"
            class="md-raised md-primary"
          >Submit</md-button
          >
        </md-card-actions>
      </form>
    </div>
  </div>
</template>

<script>
import productServices from "../services/productServices.js";
export default {
  name: "UpdateProduct",
  props: ['product'],
  data() {
    console.log("product data",product);
    return {
      form: {
        productId: this.product["productId"],
        productName: this.product["productName"],
        productBrand: this.product["productBrand"],
        productDescription: this.product["productDesription"],
        price: this.product["price"],
        image: this.product["image"],
      },
    };
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

    updateProduct() {
      
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  left: 30.5vw;
  top: 8vh;
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
.Image{
  display: flex;
  justify-content: space-between;
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
.ImageDiv{
  width:80%;
  display: flex;
  justify-content: space-between;
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
