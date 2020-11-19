<template>
  <div class="container">
    <div class="add">Update Product</div>
    <div class="form-container">
      <form class="md-layout">
        <br /><br />
        <md-field>
          <label for="ProductName">Product Name</label>
          <md-input
            name="ProductName"
            class="ProductName"
            v-model="productName"
          ></md-input>
        </md-field>

        <md-field>
          <label for="ProductBrand ">Product Brand</label>
          <md-input
            name="ProductBrand "
            class="ProductBrand"
            v-model="productBrand"
          ></md-input>
        </md-field>

        <md-field>
          <label for="ProductDescription ">Product Description </label>
          <md-input
            name="ProductDescription"
            class="ProductDescription"
            v-model="productDescription"
          ></md-input>
        </md-field>
        <md-field>
          <label for="Price ">Price </label>
          <md-input name="Price" class="Price" v-model="price"></md-input>
        </md-field>
        <div class="ImageDiv">
          <div class="Image">
            <label for="Image" class="Imagetext">Image :</label>
            <input type="file" @change="onFileSelected" />
          </div>
          <br />
          <div>
            <img class="productImage" :src="image" />
          </div>
        </div>

        <md-card-actions class="button">
          <md-button class="md-raised md-primary" v-on:click="updateProduct()"
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
  created() {
    this.getIDfromURL();
    this.getProduct();
  },
  data() {
    return {
      productName: '',
      productBrand : '',
      productDescription :'',
      price: '',
      image : '',
      Products: [],
      Product: null,
      productId:''
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
    getProduct() {
      productServices.getProduct().then(result => {
                if (result.status == "200"){
                    this.Products=result.data.data;
                    console.log(this.Products);
                    console.log(this.productId);
                    this.Products.find(data => {
                        if (data.productId == this.productId) {
                            this.Product=data;
                            this.productName=this.Product.productName;
                            this.productBrand=this.Product.productBrand;
                            this.productDescription=this.Product.productDescription;
                            this.price=this.Product.price;
                            this.image=this.Product.image;
                            console.log(this.Product);
                        }
                    })
                }
                }).catch(error => {
                    console.log(error);
            });
    },
    getIDfromURL(){
      this.productId= window.location.pathname.split('/')[2];
      console.log(this.productId);
      return this.productId;
    },
    updateProduct(){
      var formData = new FormData();
      formData.append("productName", this.productName);
      formData.append("productBrand", this.productBrand);
      formData.append("productDescription", this.productDescription);
      formData.append("price", this.price);
      formData.append("image", this.image);
      console.log("Form Data",formData);
    console.log("Updated Data",formData,this.Product.productId)
    productServices.updateProduct(this.Product.productId,formData).then(result => {
               console.log("Updated Data",result);

       if (result.status == "200"){
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 3000);
       }
     }).then( ()=> {
       this.clearForm();
     }).catch( error => {
       console.log("Error:", error.response.status);
       if (error.response.status == "401"){
         this.clearForm();
       }
       else if (error.response.status == "404"){
         this.clearForm();
       }
     })
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
.Image {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.Imagetext {
  width: 50%;
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
.ImageDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.productImage {
  width: 200px;
  height: 200px;
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
