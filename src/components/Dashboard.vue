<template>
  <div>
    <md-table class="table">
      <md-table-row>
        <md-table-head md-numeric>ProductId</md-table-head>
        <md-table-head>ProductName </md-table-head>
        <md-table-head>ProductBrand </md-table-head>
        <md-table-head>ProductDescription </md-table-head>
        <md-table-head>Price </md-table-head>
        <md-table-head>Image  </md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>1</md-table-cell>
        <md-table-cell>Shawna Dubbin</md-table-cell>
        <md-table-cell>sdubbin0@geocities.com</md-table-cell>
        <md-table-cell>Male</md-table-cell>
        <md-table-cell>Assistant Media Planner</md-table-cell>
        <md-table-cell>Assistant Media Planner</md-table-cell>
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
  .table{
    margin-top: 5% !important;
  }
</style>
