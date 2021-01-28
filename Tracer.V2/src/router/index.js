import Vue from 'vue'
import VueRouter from 'vue-router';
import create_event from "@/Pages/create_event";
import app_information from "@/Pages/app_information";
import scan_page from "@/Pages/scan_page";
import report_case from "@/Pages/report_case";
import settings from "@/Pages/settings";
import homescreen from "@/Pages/homescreen";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: homescreen,
        children: [
            {
                path: '/Settings',
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
        ]
    },
    {
        path: '/scanpage',
        component: scan_page
    },
    {
        path: '/create_event',
        component: create_event
    },

]

export const router = new VueRouter({
    routes // short for `routes: routes`
})

export class Router{
    static navigateTo(route) {
        return router.push(route);
    }

    static navigateWithoutHistoryTo(route) {
        return router.replace(route);
    }

    static navigateIf(shouldNavigate, next) {
        if (shouldNavigate){
            next();
        }else{
            next('/');
        }
    }
}

export default router
