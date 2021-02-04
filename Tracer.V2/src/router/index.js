import Vue from 'vue'
import VueRouter from 'vue-router'
import homescreen from "@/Pages/homescreen";
import settings from "@/Pages/settings";
import report_case from "@/Pages/report_case";
import app_information from "@/Pages/app_information";
import create_event from "@/Pages/create_event";
import qr_scanner from "@/Pages/qr_scanner";
import scan_success from "@/Pages/scan_success";
import qr_generator from "@/components/qr_generator";

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
    path: '/scan_done',
    component: scan_success,
  },
  {
    path: '/qr_generator',
    component: qr_generator,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
