<template>
  <div>
    <div class="navbar">
      <div class="logoDiv"><img alt="Login logo" class="menu" src="../assets/menu.png"></div>
      <div class="buttonDiv"><md-card-actions>
          <md-button
            class="button"
            href="/addProduct"
            > + Add Product</md-button
          > </md-card-actions></div>
      <div class="logoDiv"><img alt="Login logo" class="user" src="../assets/user.png"></div>
    </div>
    <md-table class="table">
      <md-table-row>
        <md-table-head md-numeric class="header">ProductId</md-table-head>
        <md-table-head class="header">ProductName </md-table-head>
        <md-table-head class="header">ProductBrand </md-table-head>
        <md-table-head class="header">ProductDescription </md-table-head>
        <md-table-head class="header">Price </md-table-head>
        <md-table-head class="header">Image  </md-table-head>
        <md-table-head class="header">Edit </md-table-head>
        <md-table-head class="header">Delete  </md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric class="row">1</md-table-cell>  
        <md-table-cell class="row">Shawna Dubbin</md-table-cell>
        <md-table-cell class="row">sdubbin0@geocities.com</md-table-cell>
        <md-table-cell class="row">Male</md-table-cell>
        <md-table-cell class="row">Assistant Media Planner</md-table-cell>
        <md-table-cell class="row">Assistant Media Planner</md-table-cell>
        <md-table-cell class="row"><img alt="Login logo" class="edit" src="../assets/edit.jpg"></md-table-cell>
        <md-table-cell class="row"><img alt="Login logo" class="delete" src="../assets/delete.png"></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TableBasic'
  }
</script>

<style scoped>
  .navbar{
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    background-color: #faf6f7;
    padding: 20px 40px 20px 40px;
  }
  .menu{
    width:30px;
    height: 30px;
  }
  .button{
    font-size:16px;
    font-weight: bold;
    color:white !important;
    background-color: #107bf7;
    padding: 10px 10px 10px 10px;
    border-radius:5px;
    border-color:#107bf7;
  }
  .buttonDiv{
    padding-left:70%;
  }
  .user{
    width:30px;
    height: 30px;
  }
  .table{
    margin-top: 1% !important;
  }
  .header{
    font-size:20px;
    font-weight:bold;    
    color: #aa3149 !important;
  }
  .row{
    font-size: 14px;
    text-align:center;
    background-color: #fdc4cf;
    word-wrap: break-word
  }
  .edit{
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }
  .delete{
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }
</style>
