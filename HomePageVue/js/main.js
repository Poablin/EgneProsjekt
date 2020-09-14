Vue.component('main-page', {
    methods: {
        changePage(page) {
            this.$emit('change-page', selectedPage = page)
        },
    },
    template: `


        <div class="gridContent" id="gridContent">
            <div class="header">
                <div class="logoDiv"><span>Eventuell logo her</span></div>
                <div class="listDiv">
                    <ul class="headerList">
                    <li v-on:click="changePage('home')">Home</li>
                    <li><a href="pages/Ludo/game.html">Ludo</a></li>
                    <li v-on:click="changePage('tutorial')">Vue Tutorial oppgave</a></li>
                    <li><a href="#">Ingenting her enda</a></li>
                    </ul>
                </div>
            </div>
            <div class="main" id="main"></div>
            <div class="footer"></div>
        </div>

    `,
})



let app = new Vue({
    el: '#app',
    data: {
        selectedPage: 'home',
        premium: true,
        cart: [],
    },
    methods: {
        updateView(page) {
            this.selectedPage = page
        },
    }
})