import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import NewProductView from '../views/NewProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/products',
    name: 'products',
    component: EmployeeView
  }
  /*,{
    path: '/pagination',
    name: 'pagination',
    component: PaginationView
  }*/,
  {
    path: '/new-product',
    name: 'new-product',
    component: NewProductView
  },

] 

const router = new VueRouter({
  routes
})

export default router
