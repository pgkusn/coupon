<template>
    <div class="index">
        <a href="/"><img src="images/icon.png" srcset="images/icon@2x.png 2x, images/icon@3x.png 3x" alt=""></a>
        <h2>Vidol 精彩戲劇．電影看不完</h2>
        <h1>優惠兌換櫃台</h1>
        <p>為維護您收視的權益，稍後將要求您註冊/登入，<br>以利優惠序號歸戶作業，感謝您的配合。</p>
        <router-link to="/detail">立即兌換</router-link>
    </div>
</template>

<script>
module.exports = {
    name: 'Index',
}
</script>