import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ProductView from "../views/ProductView.vue";
import NewProductView from "../views/NewProductView.vue";
import BlogView from "../views/BlogView.vue";
import SelectedProduct from "../views/SelectedProductView.vue";
import SelectedPost from "../views/SelectedPostView.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductView,
  },
  /*,{
    path: '/pagination',
    name: 'pagination',
    component: PaginationView
  }*/ {
    path: "/new-product",
    name: "new-product",
    component: NewProductView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/selected-product",
    name: "selected-product",
    component: SelectedProduct,
  },
  {
    path: "/selected-post",
    name: "selected-post",
    component: SelectedPost,
  },
];
const router = new VueRouter({
  routes,
});
export default router;
