<template>
    <div class="detail">
        <h2 class="subtitle">
            <a href="/" class="logo"><img src="assets/resource/image/coupon/logo.png" alt=""></a>
            Vidol 精彩戲劇．電影看不完
        </h2>
        <form action="" method="post">
            <div class="fields">
                <div class="main container">
                    <h1 class="title">優惠兌換櫃台</h1>
                    <div class="field">
                        <input type="text" name="name" required v-model="info.name" :class="{ active: info.name.length }">
                        <div class="field__text main-style">訂閱者姓名</div>
                    </div>
                    <div class="field">
                        <input type="text" name="email" required v-model="info.email" :class="{ active: info.email.length }">
                        <div class="field__text main-style">連絡信箱</div>
                    </div>
                    <div class="field">
                        <input type="text" name="phone" required v-model="info.phone" :class="{ active: info.phone.length }">
                        <div class="field__text main-style">聯絡電話</div>
                    </div>
                    <div class="field">
                        <input type="text" name="address" required v-model="info.address" :class="{ active: info.address.length }">
                        <div class="field__text main-style">地址</div>
                    </div>
                </div>
                <div class="code">
                    <div class="code__form">
                        <p class="title">優惠序號</p>
                        <div class="field">
                            <input type="text" name="code" required v-model="info.code" :class="{ active: info.code.length }">
                            <div class="field__text code-style">輸入優惠序號</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="invoice container">
                <p class="invoice__title">發票</p>
                <label>
                    <input type="radio" name="invoice" value="1">電子發票
                    <div class="radio-mark">V</div>
                </label>
                <div class="radio-desc">
                    <p class="radio-desc--electron">根據財政部<strong>『電子發票實施作業要點』</strong>，Vidol將為您將發票檔案儲存於訂單資料中，並將發票檔上傳到政府的<strong>『電子發票整合服務平台』</strong>，會員可至ezPay電子發票查詢專區，查詢發票詳細資料。<br>詳細說明請參考『ezPay問與答』。二聯式電子發票，發票一經開立，恕無法換開為三聯式發票。</p>
                </div>
                <label>
                    <input type="radio" name="invoice" value="2">捐贈發票
                    <div class="radio-mark">V</div>
                </label>
                <div class="radio-desc"></div>
                <label>
                    <input type="radio" name="invoice" value="3">索取三聯式發票
                    <div class="radio-mark">V</div>
                </label>
                <div class="radio-desc">
                    <p class="radio-desc--triplicate">開立三聯式發票買受人請填寫公司抬頭</p>
                    <input type="text" placeholder="統一編號">
                </div>
            </div>
            <div class="postscript container">
                <label>
                    <input type="checkbox">本人已詳閱並同意以下事項：
                    <div class="checkbox-mark">V</div>
                </label>
                <div class="checkbox-desc">您必須在郵件顯示截止日期前輸入兌換序號，接著完成信用卡資料輸入、確認信用卡有效性後，該序號才會生效提供收視。若在截止日期前沒有完成上述動作，該序號將失效無法使用，Vidol 不再提供優惠序號服務。</div>
                <div class="checkbox-desc"><strong>請注意：</strong>請注意：優惠兌換序號是由 Vidol 提供，每位符合資格者，每個會員編號僅提供一次優惠序號。<br>序號優惠期間，Vidol 將保留隨時基於任何必要原因，修改、暫停或終止此次優惠兌換的權利。</div>
            </div>
            <input type="submit" value="兌換">
        </form>
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
                code: '',
            }
        }
    },
}
</script>