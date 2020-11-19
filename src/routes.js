import Register from "./components/Register.vue";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";
import AddProduct from "./components/AddProduct.vue";
import UpdateProduct from "./components/UpdateProduct.vue";

function guardRoute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("Token")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
}

export default [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard,beforeEnter: guardRoute},
  { path: "/addProduct", component: AddProduct ,beforeEnter: guardRoute},
  { path: "/updateProduct/:Id", component: UpdateProduct ,beforeEnter: guardRoute},
];