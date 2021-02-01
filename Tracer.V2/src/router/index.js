import Vue from 'vue'
import VueRouter from 'vue-router'
import homescreen from "@/Pages/homescreen";
import settings from "@/Pages/settings";
import report_case from "@/Pages/report_case";
import app_information from "@/Pages/app_information";
import create_event from "@/Pages/create_event";
import qr_scanner from "@/components/qr_scanner";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homescreen,
  },
  {
    path: '/settings',
    component: settings
  },
  {
    path: '/fall_melden',
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
    path: '/scan_success',
    component: scan_success,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
