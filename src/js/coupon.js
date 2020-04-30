const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('/assets/resource/components/couponCounter/index.vue') },
        { path: '/detail', component: httpVueLoader('/assets/resource/components/couponCounter/detail.vue') }
    ]
});

const store = new Vuex.Store({
    state: {
        userLogin: false,
        api_domain_url
    },
    mutations: {
        updateLogin(state, data) {
            state.userLogin = data;
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    computed: {
        userLogin() {
            return this.$store.state.userLogin;
        }
    },
    mounted() {
        //check if user login
        var value = $.cookie("_user_token");
        if (value != undefined && value != '') {
            this.$store.commit('updateLogin', true);
            //memorize profile info in cookie
            $.ajax({
                type: "GET",
                url: BaseUrlPHP + '/users/profile',
                headers: { 'Authorization': autorCodeUser },
                success: function(data) {
                    if (data.status_code && data.status_code != 0) {
                        //error
                        setCookie('_user_token', '', 1, domain);
                        setCookie('_session_id', '', 1, domain);
                        setCookie('member_id', '', 1, domain);
                        setCookie('nick_name', '', 1, domain);
                        setCookie('propic', '', 1, domain);
                    }
                    else {
                        if (data.profile_image_url && data.profile_image_url != null) {
                            setCookie('propic', data.profile_image_url, 1, domain);
                        }
                        setCookie('nick_name', data.nick_name, 1, domain);
                        setCookie('member_id', data.member_id, 1, domain);

                        //change profile
                        $(document).ready(function () {
                            if (!($.cookie("propic") == 'undefined' || $.cookie("propic") == undefined || $.cookie("propic") == '')) {
                                $('.img').css("background-image", 'url(' + $.cookie("propic") + ')');
                            }
                            $('.member').css('display', 'inline-flex');
                            $('.mywatchhistory').css('display', 'block');
                            $('.unlogin').css('display', 'none');
                        })
                    }
                }
            });
        }
        else {
            this.$store.commit('updateLogin', false);
        }
        function setCookie(c_name, value, expiredays, domain){
            var _exdate = new Date();
            _exdate.setDate(_exdate.getDate() + expiredays);
            document.cookie = c_name + "=" + escape(value) + ";domain=" + domain + ";path=/" + ((expiredays==null) ? "" : ";expires=" + _exdate.toGMTString())
        }
    },
});