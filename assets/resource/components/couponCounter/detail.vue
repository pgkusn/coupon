<template>
    <div class="detail">
        <div class="container">
            <a href="/" class="logo"><img src="assets/resource/image/coupon/logo.png" alt=""></a>
            <h2 class="subtitle">Vidol 精彩戲劇．電影看不完</h2>
            <h1 class="title">優惠兌換櫃台</h1>
            <form action="" method="post">
                <div class="field">
                    <input type="text" name="name" required v-model="info.name" :class="{ active: info.name.length }">
                    <div class="text">訂閱者姓名</div>
                </div>
                <div class="field">
                    <input type="text" name="email" required v-model="info.email" :class="{ active: info.email.length }">
                    <div class="text">連絡信箱</div>
                </div>
                <div class="field">
                    <input type="text" name="phone" required v-model="info.phone" :class="{ active: info.phone.length }">
                    <div class="text">聯絡電話</div>
                </div>
                <div class="field">
                    <input type="text" name="address" required v-model="info.address" :class="{ active: info.address.length }">
                    <div class="text">地址</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Detail',
    data() {
        return {
            info: {
                name: '',
                email: '',
                phone: '',
                address: '',
            }
        }
    },
}
</script>