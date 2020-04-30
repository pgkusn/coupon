<template>
    <div class="detail">
        <h2 class="subtitle">
            <a href="/" class="logo" title="回首頁"><img src="assets/resource/image/coupon/logo.png" alt=""></a>
            Vidol 精彩戲劇．電影看不完
        </h2>
        <form action="/payments/billing_coupon" method="post">
            <div class="fields">
                <div class="fields__content">
                    <div class="main container">
                        <h1 class="title">優惠兌換櫃台</h1>
                        <div class="field">
                            <input type="text" name="name" required v-model="info.name" :class="{ active: info.name.length }">
                            <div class="field__text main-style">訂閱者姓名</div>
                        </div>
                        <div class="field">
                            <input type="email" name="email" required v-model="info.email" :class="{ active: info.email.length }">
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
                                <input type="text" name="coupon" required v-model="info.code" :class="{ active: info.code.length }">
                                <div class="field__text code-style">輸入優惠序號</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="invoice container">
                <p class="invoice__title">發票</p>
                <label>
                    <input type="radio" name="invoice_type" value="electronic_invoicing" checked v-model="invoiceValue">電子發票
                    <div class="radio-mark">V</div>
                </label>
                <div class="radio-desc">
                    <p class="radio-desc--electron">根據財政部<strong>『電子發票實施作業要點』</strong>，Vidol將為您將發票檔案儲存於訂單資料中，並將發票檔上傳到政府的<strong>『電子發票整合服務平台』</strong>，會員可至ezPay電子發票查詢專區，查詢發票詳細資料。<br>詳細說明請參考『ezPay問與答』。二聯式電子發票，發票一經開立，恕無法換開為三聯式發票。</p>
                </div>
                <label>
                    <input type="radio" name="invoice_type" value="donate" v-model="invoiceValue">捐贈發票
                    <div class="radio-mark">V</div>
                </label>
                <div class="radio-desc select">
                    <select name="love_code">
                        <option value="919" selected>財團法人創世社會福利基金會</option>
                        <option value="555">臺灣基督教門諾會醫療財團法人門諾醫院</option>
                        <option value="88432">財團法人喜憨兒社會福利基金會</option>
                        <option value="13579">財團法人陽光社會福利基金會</option>
                        <option value="8957282">財團法人流浪動物之家基金會</option>
                        <option value="9527">財團法人罕見疾病基金會</option>
                    </select>
                </div>
                <label>
                    <input type="radio" name="invoice_type" value="paper_invoice" v-model="invoiceValue">索取三聯式發票
                    <div class="radio-mark">V</div>
                </label>
                <div class="radio-desc">
                    <p class="radio-desc--triplicate">開立三聯式發票買受人請填寫公司抬頭</p>
                    <input type="text" name="buyer_ubn" placeholder="統一編號" :required="invoiceValue === 'paper_invoice'" ref="tax">
                </div>
            </div>
            <div class="postscript container">
                <label>
                    <input type="checkbox" required>本人已詳閱並同意以下事項：
                    <div class="checkbox-mark">V</div>
                </label>
                <div class="checkbox-desc">您必須在郵件顯示截止日期前輸入兌換序號，接著完成信用卡資料輸入、確認信用卡有效性後，該序號才會生效提供收視。若在截止日期前沒有完成上述動作，該序號將失效無法使用，Vidol 不再提供優惠序號服務。</div>
                <div class="checkbox-desc"><strong>請注意：</strong>請注意：優惠兌換序號是由 Vidol 提供，每位符合資格者，每個會員編號僅提供一次優惠序號。<br>序號優惠期間，Vidol 將保留隨時基於任何必要原因，修改、暫停或終止此次優惠兌換的權利。</div>
            </div>
            <input type="submit" value="兌換">

            <input type="hidden" name="payment_method" value="1">
        </form>
    </div>
</template>

<script>
module.exports = {
    name: 'Detail',
    data: function () {
        return {
            info: {
                name: '',
                email: '',
                phone: '',
                address: '',
                code: '',
            },
            invoiceValue: 'electronic_invoicing',
        }
    },
    computed: {
        userLogin: function () {
            return this.$store.state.userLogin;
        },
        api_domain_url: function () {
            return this.$store.state.api_domain_url;
        },
    },
    watch: {
        invoiceValue: function (value) {
            if (value === 'paper_invoice') {
                this.$refs.tax.focus();
            }
        }
    },
    methods: {
        setCookie: function (c_name, value, expiredays, domain) {
            var _exdate = new Date();
            _exdate.setDate(_exdate.getDate() + expiredays);
            document.cookie = c_name + "=" + escape(value) + ";domain=" + domain + ";path=/" + ((expiredays == null) ? "" : ";expires=" + _exdate.toGMTString())
        }
    },
    mounted: function () {
        if (this.userLogin) {
            let userToken = $.cookie('_user_token');
            let headers = { Authorization: userToken };
            axios({
                method: 'GET',
                url: 'https://' + this.api_domain_url + '/users/profile',
                headers
            })
                .then(function (res) {
                    let profile = res.data;
                    this.info.name = profile.full_name;
                    this.info.email = profile.contact_email;
                    this.info.phone = profile.contact_number;
                    this.info.address = profile.address;
                }.bind(this));
        }
        else {
            let url = location.origin + location.pathname + location.hash;
            this.setCookie('user_signed_in_redirect_to', url, 1, domain);
            location.href = 'https://vidol.tv/login';
        }
    },
}
</script>