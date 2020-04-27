const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('/assets/resource/components/couponCounter/index.vue') },
        { path: '/detail', component: httpVueLoader('/assets/resource/components/couponCounter/detail.vue') }
    ]
});

new Vue({
    el: '#app',
    router,
});