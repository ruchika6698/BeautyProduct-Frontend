<template>
  <div class="tableContainer">
         <table>
          <tr class="tableHead">
            <th>ProductId</th>
            <th>ProductName</th>
            <th>ProductBrand </th>
            <th>ProductDescription </th>
            <th>Price </th>
            <th>Image </th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          
          <tr>
              <td>cell</td>
              <td>cell</td>
              <td>cell</td>
              <td>cell</td>
              <td>cell</td>
              <td>cell</td>
              <td>cell</td>
              <td>cell</td>

          </tr>
      </table
>

  </div>
</template>

<style lang="scss" scoped>  
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  max-width:1265px;
}
.tableContainer{
  display:flex;
  justify-content:center;
}
td, th {
  border: 1px  solid #dddddd;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #354168;
  font-size: 15px;
  background-color:#FFFFFF;
  border-color: #FFFFFF;
  border-bottom: 1px solid #D5DCEC;
}

th {
  background-color: #ec679f;
  border-color: #ec679f;
}
.approved{
  background-color: #4CCEAC;
  border-radius: 5px;
  color: white;
  padding: 5px;
  width:70px
}
.danger{
  background-color: #DB504A;
  border-radius: 5px;
  color: white;
  padding: 5px;
  width:58px
}

@media screen and (max-width: 1024px) {
  table{
    width:900px;
  }
}
@media screen and (max-width: 786px) {
  table{
    width:600px !important;
  }
  td, th {
    padding-top: 12px;
    padding: 12px;
  }
}
@media screen and (max-width: 540px) {
  .tableContainer{
    padding-left:170px;
    padding-right:5px;
    margin-left:5%;
    margin-right:5%;
  }
  td, th {
    padding-top: 10px;
    padding: 10px;
  }
}
@media screen and (max-width: 414px) {
  .tableContainer{
    padding-left:280px;
    margin-left:3%;
  }
}
@media screen and (max-width: 411px) {
  .tableContainer{
    padding-left:280px;
  }
}
@media screen and (max-width: 375px) {
  .tableContainer{
    padding-left:310px;
  }
}
@media screen and (max-width: 360px) {
  .tableContainer{
    padding-left:350px;
  }
}
@media screen and (max-width: 320px) {
  .tableContainer{
    padding-left:320px;
    margin-left:15px;
  }
}
</style>