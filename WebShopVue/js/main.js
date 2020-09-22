Vue.component('product-review', {
    template: `<form class="review-form" @submit.prevent="onSubmit">
    <p v-if="errors.length">
     <b>Venligst fiks disse problemene:</b>
     <ul style="list-style-type:none">
        <li v-for="error in errors">{{ error }}</li>
     </ul>
    </p>

    <p>
      <label for="name">Navn:</label>
      <input id="name" v-model="name" placeholder="Navn">
    </p>
    
    <p>
      <label for="review">Produktanmeldelse:</label>      
      <textarea id="review" v-model="review"></textarea>
    </p>
    
    <p>
      <label for="rating">Terningkast:</label>
      <select id="rating" v-model.number="rating">
        <option>6</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <p>Vil du anbefale dette produktet?</p>
      <label>Ja</label>
      <input type="radio" value="yes" v-model="recommend">
      <label>Nei</label>
      <input type="radio" value="no" v-model="recommend">
    </p>
        
    <p>
      <input type="submit" value="Lagre">  
    </p>    
  
  </form>`,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: [],
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating && this.recommend) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend,
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
                this.recommend = null
                this.errors.length = 0

            }
            else {
                if (!this.name) this.errors.splice(0, 1, 'Navn kreves'); else if (this.name) this.errors.splice(0, 1, null)
                if (!this.review) this.errors.splice(1, 1, 'Anmeldelse kreves'); else if (this.review) this.errors.splice(1, 1, null)
                if (!this.rating) this.errors.splice(2, 1, 'Terningkast kreves'); else if (this.rating) this.errors.splice(2, 1, null)
                if (!this.recommend) this.errors.splice(3, 1, 'Spørsmål kreves'); else if (this.recommend) this.errors.splice(3, 1, null)
            }




        }
    }
})

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true,
        }
    },
    template: `  
       <ul>
           <li v-for="detail in details">{{ detail }}</li>
       </ul>`,

})

Vue.component('product-tabs', {
    template: `
    <div>
        <span class="tab" 
        v-for="(tab, index) in tabs" :key="index">
        {{ tab }}</span>
    </div>
    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review']
        }
    }
})

Vue.component('product', {
    props: {},
    template: `
<div>   
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1> {{title}} </h1>
                <p> {{description}} </p>

                <product-details :details="details"></product-details>

                <p v-if="inStock > 10">På lager.<span v-if="inStock >= 15">{{' ' + sale}}</span></p>
                <p v-else-if="inStock <= 10 && inStock > 0">Snart tomt på lageret!</p>
                <p v-else>Ikke på lager.</p>
                <p> Levering: {{ shipping }}</p>
                <p v-show="inStock > 10">Tester v-show hvis Instock er mer en 10</p>

                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                    :style="[{ 'font-size': variant.fontSize }]">
                    <p v-on:mouseover="updateProduct(index)">{{ variant.variantSize }}</p>
                </div>

                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }"
                    class="button">Add to Cart</button>
                <button v-on:click="removeFromCart" class="button">Remove</button>

            </div>

        </div>

        <product-tabs></product-tabs>

        <div> 
        <h1>Anmeldelser</h1>
        <p v-if="!reviews.length">Det er ingen anmeldelser</p>
        <ul>
            <li v-for="review in reviews">
            
            <p>{{ review.name }}</p>
            <p>{{ review.review }}</p>
            <p>{{ review.rating }}</p>
            
            </li>
        </ul>
        </div>

    <product-review v-on:review-submitted="addReview"></product-review>
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
                variantId: 4325,
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
            reviews: [],
        }
    },
    methods: {
        addToCart: function () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeFromCart: function () {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
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
        },
        shipping() {
            if (this.premium) {
                return "Gratis"
            }
            return 39 + 'kr'
        }
    }

})

Vue.component('main-footer', {
    template: `<div class="footer">LunchPower</div>`,
})

Vue.component('main-header', {
    template: `
    <div class="header">
        <a v-on:click="changePage('home')">Home</a>
        <a v-on:click="changePage('cart')">Cart</a>
        <a v-on:click="changePage('account')">Account</a>
        <a v-on:click="changePage('about')">About</a>
        <a v-on:click="changePage('admin')">Admin</a>
    </div>`,
    methods: {
        changePage(page) {
            this.$emit('change-page', selectedPage = page)
        },
    }
})

Vue.component('admin', {
    template: '<div>admin</div>',
})

Vue.component('about', {
    template: '<div>about</div>',
})

Vue.component('account', {
    template: '<div>account</div>',
})

Vue.component('cart', {
    template: `
    <div>
        <ul class="cartList">
            <li>Cart Item 1</li>
            <li>Cart Item 2</li>
        </ul>
    </div>`,
})

Vue.component('main-page', {
    template: `
    <div class="mainPage">
        <div class="mainImage" v-on:click="changePage('product')">
            <img v-bind:src=mainImage></img>
            <p>Produkt 1</p>
        </div>
        <div class="gridImages">
        <div id="spacerDiv1"></div>
            <div v-on:click="changePage('product')">
                <img v-bind:src=mainImage></img>
                <p>Produkt 2</p>
            </div>
            <div v-on:click="changePage('product')">
                <img v-bind:src=mainImage></img>
                <p>Produkt 3</p>
            </div>
            <div v-on:click="changePage('product')">
                <img v-bind:src=mainImage></img>
                <p>Produkt 4</p>
            </div>
            <div v-on:click="changePage('product')">
                <img v-bind:src=mainImage></img>
                <p>Produkt 5</p>
            </div>
        <div id="spacerDiv2"></div>
        </div>
    </div> `,
    methods: {
        changePage(page) {
            this.$emit('change-page', selectedPage = page)
        },
    },
    data: function () {
        return {
            mainImage: 'https://lp-cms-production.imgix.net/news/2019/05/Some-of-the-foodstuffs-on-offer-at-Depo.jpg'
        }
    },
})

let app = new Vue({
    el: '#app',
    data: {
        selectedPage: 'home',
        cart: [],
    },
    methods: {
        updateView(page) {
            this.selectedPage = page
        },
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            for (i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1)
                }
            }
        }
    }
})