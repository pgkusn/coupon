const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('components/couponCounter/index.vue') },
        { path: '/detail', component: httpVueLoader('components/couponCounter/detail.vue') }
    ]
});

new Vue({
    el: '#app',
    router,
});