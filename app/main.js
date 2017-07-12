 import Vue from 'vue/dist/vue.js';
    import VueRouter from 'vue-router';

    import Index from "./components/Index.vue";
    import List from "./components/List.vue";
    import Show from "./components/Show.vue";
    import Login from "./components/Login.vue";
    import Zuce from "./components/Zuce.vue";
    Vue.use(VueRouter);

    var router = new VueRouter({
        routes: [
            { path: '/', component: Index },
            { path: '/list', component: List },
            {path: '/show', component: Show },
            {path: '/login', component: Login },
            {path: '/zuce', component: Zuce },
            { path: '*', redirectTo: "/" }
        ]
    })

    new Vue({
        el: "#app",
        router: router
    })