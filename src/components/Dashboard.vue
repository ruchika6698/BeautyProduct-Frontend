<template>
  <div>
    <div class="navbar">
      <div class="logoDiv">
        <img alt="Menu logo" class="menu" src="../assets/menu.png" />
      </div>
      <div class="buttonDiv">
        <md-card-actions>
          <md-button class="button" href="/addProduct">
            + Add Product</md-button
          >
        </md-card-actions>
      </div>
      <img alt="User logo" class="user" src="../assets/user.png" />
      <div class="logoDiv">
        <md-button @click="logout" class="logout">Log out</md-button>
      </div>
    </div>
    <br />
    <md-table class="table">
      <md-table-row>
        <md-table-head md-numeric class="header">ProductId</md-table-head>
        <md-table-head class="header">ProductName </md-table-head>
        <md-table-head class="header">ProductBrand </md-table-head>
        <md-table-head class="header">ProductDescription </md-table-head>
        <md-table-head class="header">Price </md-table-head>
        <md-table-head class="header">Image </md-table-head>
        <md-table-head class="header">Delete </md-table-head>
      </md-table-row>

      <md-table-row v-for="Product in Products" :key="Product.index">
        <md-table-cell md-numeric class="row">
          {{Product.productId}}</md-table-cell
        >
        <md-table-cell class="row"> {{Product.productName}}</md-table-cell>
        <md-table-cell class="row"> {{Product.productBrand}}</md-table-cell>
        <md-table-cell class="row">
          {{Product.productDescription}}</md-table-cell
        >
        <md-table-cell class="row"> {{Product.price}}</md-table-cell>
        <md-table-cell class="row"
          ><img class="productImage" :src="Product.image"
        /></md-table-cell>
        <md-table-cell class="row"
          ><button class="delete" v-on:click="deleteProduct(Product)">
            <b-icon
              icon="trash"
              class="btn-delete rounded-circle p-2"
              variant="light"
              style="width: 30px; height: 30px"
            ></b-icon></button
        ></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import productServices from "../services/productServices.js";

  export default {
    name: 'TableBasic',
    data() {
    return {
      isListEmpty: true,
      Products: [],
      Product: null,
      showDialog: false,
      isError: false,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    logout(){
      localStorage.removeItem('Token');
      localStorage.removeItem('First Name');
      localStorage.removeItem('Last Name');
      localStorage.removeItem('Email Id');
      localStorage.removeItem('User Role');
      this.$router.push('/');
    },
    getProduct() {
      productServices
        .getProduct()
        .then((result) => {
          this.Products = result.data.data;
          if (this.Products.length > 0) {
            this.isListEmpty = false;
            console.log("Product Data",result.data.data);
          }
        })
        .catch((error) => {
          alert("Error Occured While Fetching Product Details");
        });
    },
    deleteProduct(product){
      console.log(product);
        productServices.deleteProduct(product.productId).then(result => {
          if (result.status == "200"){
              console.log("deleted data",result);
              this.getProduct();
          }
            }).catch(error => {
                console.log(error);
        });
       }
  }
  }
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #ce3453;
  padding: 10px 40px 10px 40px;
}
.menu {
  width: 30px;
  height: 30px;
  margin-top: 20%;
  border-radius: 50px;
}
.button {
  font-size: 16px;
  font-weight: bold;
  color: white !important;
  background-color: #e75d78;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  border-color: #e75d78;
}
.buttonDiv {
  padding-left: 65%;
}
.productImage {
  width: 100px;
  height: 80px;
}
.user {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-top: 1%;
}
.table {
  margin-top: 1% !important;
}
.header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #aa3149 !important;
}
.row {
  font-size: 14px;
  text-align: center;
  word-wrap: break-word;
}
.logout {
  background-color: white;
  border-color: white;
  border-radius: 5px;
  font-weight: bold;
  color: rgb(128, 0, 0) !important;
}
.delete {
  background-color: white;
  border-color: white;
  color: red !important;
}
</style>
