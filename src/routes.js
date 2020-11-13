import Register from "./components/Register.vue";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";

export default [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
];