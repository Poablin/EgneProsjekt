Vue.component('product', {
    template: `<div>Hei2</div>`,
    methods: {},
})

Vue.component('main-footer', {
    template: `<div class="footer"></div>`,
})

Vue.component('main-header', {
    template: `
    <div class="header">
        <a>Home</a>
        <a>Cart</a>
        <a>Account</a>
        <a>About</a>
        <a>Admin</a>
    </div>`,
})

Vue.component('main-page', {
    template: `
    <div class="mainPage">
    <img src="https://lp-cms-production.imgix.net/news/2019/05/Some-of-the-foodstuffs-on-offer-at-Depo.jpg"></img>
    </div> `,
    methods: {},
})

let app = new Vue({
    el: '#app',
    data: {},
    methods: {},
    computed: {},
})