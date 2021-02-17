import Vue from 'vue'
import VueRouter from 'vue-router'
import homescreen from "@/Pages/homescreen";
import report_case from "@/Pages/report_case";
import app_information from "@/Pages/app_information";
import create_event from "@/Pages/create_event";
import qr_scanner from "@/Pages/qr_scanner";
import scan_success from "@/Pages/scan_success";
import qr_generator from "@/Pages/qr_generator";

Vue.use(VueRouter) //Important to use the Vue-Router

//the basic routing for the pwa
const routes = [
  {
    path: '/',
    component: homescreen,
  },
  {
    path: '/report_case',
    component: report_case
  },
  {
    path: '/app_information',
    component: app_information
  },
  {
    path: '/scanpage',
    component: qr_scanner
  },
  {
    path: '/create_event',
    component: create_event
  },
  {
    path: '/scan_done',
    component: scan_success,
  },
  {
    path: '/qr_generator/:id',
    component: qr_generator,
  },
]

//initalizing the const Router as new Router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//export of the routing to the main.js
export default router
