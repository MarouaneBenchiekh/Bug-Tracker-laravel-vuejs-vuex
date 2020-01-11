/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");
import VueRouter from "vue-router";
Vue.use(VueRouter);
//support vuex
import Vuex from "vuex";
Vue.use(Vuex);
import storeData from "./store/index";

const store = new Vuex.Store(storeData);

//Vue.component("User", require("./components/UserComponent.vue").default);

const routes = [
    {
        path: "/User",
        component: require("./components/UserComponent.vue").default
    },
    {
        path: "/Project",
        component: require("./components/ProjectComponent.vue").default
    }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

const app = new Vue({
    el: "#app",
    router,
    store //vuex
});
