<template>
    <div class="index">
        <div class="container">
            <a href="/" class="logo"><img src="assets/resource/image/coupon/logo.png" alt=""></a>
            <h2 class="subtitle">Vidol 精彩戲劇．電影看不完</h2>
            <h1 class="title">優惠兌換櫃台</h1>
            <p class="desc">為維護您收視的權益，稍後將要求您註冊/登入，<br>以利優惠序號歸戶作業，感謝您的配合。</p>
            <a href class="start-btn" @click.prevent="start">立即兌換</a>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Index',
    computed: {
        userLogin: function () {
            return this.$store.state.userLogin;
        }
    },
    methods: {
        setCookie: function (c_name, value, expiredays, domain) {
            var _exdate = new Date();
            _exdate.setDate(_exdate.getDate() + expiredays);
            document.cookie = c_name + "=" + escape(value) + ";domain=" + domain + ";path=/" + ((expiredays == null) ? "" : ";expires=" + _exdate.toGMTString())
        },
        start: function () {
            if (!this.userLogin) {
                let url = location.origin + location.pathname + location.hash + '?1';
                this.setCookie('user_signed_in_redirect_to', url, 1, domain);
                location.href = 'https://vidol.tv/login';
            }
            else {
                this.$router.push('/detail');
            }
        }
    },
    mounted: function () {
        if (location.hash === '#/?1') {
            this.$router.push('/detail');
        }
    },
}
</script>