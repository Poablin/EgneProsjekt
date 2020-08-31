Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `
 <div>   
    <div class="nav-bar">
    <div class="empty">.</div>
    <a class="producerSite" :href=link> {{linkDescription}}</a>
</div>
<div class="product">
    <div class="product-image">
        <img v-bind:src="image">
    </div>
    <div class="product-info">
        <h1> {{title}} </h1>
        <p> {{description}} </p>

        <p v-if="inStock > 10">På lager.<span v-if="inStock >= 15">{{' ' + sale}}</span></p>
        <p v-else-if="inStock <= 10 && inStock > 0">Snart tomt på lageret!</p>
        <p v-else>Ikke på lager.</p>
        <p v-show="inStock > 10">Tester v-show hvis Instock er mer en 10</p>

        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
            :style="[{ 'font-size': variant.fontSize }]">
            <p v-on:mouseover="updateProduct(index)">{{ variant.variantSize }}</p>
        </div>

        <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }"
            class="button">Add to Cart</button>
        <button v-on:click="removeFromCart" class="button">Remove</button>
        <div class="cart">
            <p>Cart ({{cart}})</p>
        </div>
    </div>
  </div>
 </div>
`,
    data() {
        return {
            product: "Gulrot",
            description: "Nyplukka gulrot rett fra åkern!",
            selectedVariant: 0,
            link: "https://stangevestbygd.no/firmaer/hegsvold-gard/",
            linkDescription: 'Vår produsent',

            details: ['Ikke sprøyta', 'Økologisk', 'Snill bonde'],
            variants: [{
                variantQuantity: 10,
                variantSize: "Stor",
                variantId: 1,
                variantImage: "img/carrotLarge.jpg",
                fontSize: '50px',
                onSale: true,
            },
            {
                variantQuantity: 0,
                variantSize: "Liten",
                variantId: 2,
                variantImage: "img/carrotSmall.jpg",
                fontSize: '25px',
                onSale: false,
            }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        removeFromCart: function () {
            if (this.cart <= 0) return console.log('cart er 0');
            this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.variants[this.selectedVariant].onSale == true) {
                return 'Salg!!!'
            } else {
                return ''
            }
        }
    }

})

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
    }
})