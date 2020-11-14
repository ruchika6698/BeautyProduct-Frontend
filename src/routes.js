import Register from "./components/Register.vue";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import UpdateProduct from "./components/UpdateProduct.vue";
import AddProduct from "./components/AddProduct.vue";

export default [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/update", component: UpdateProduct },
  { path: "/addProduct", component: AddProduct },
];