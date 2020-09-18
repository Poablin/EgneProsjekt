Vue.component('product', {
    template: `<div>Hei2</div>`,
    methods: {},
})

Vue.component('main-footer', {
    template: `<div class="footer">LunchPower</div>`,
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
    <img v-bind:src=mainImage></img>
    </div> `,
    methods: {},
    data() {
        return {
            mainImage: 'https://lp-cms-production.imgix.net/news/2019/05/Some-of-the-foodstuffs-on-offer-at-Depo.jpg'
        }
    },
})

let app = new Vue({
    el: '#app',
    data: {
        currentPage : 'Home'
    },
    methods: {},
    computed: {},
})