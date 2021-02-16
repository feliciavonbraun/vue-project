Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image">
        </div>

        <div class="product-info">
            <h1> {{ titel }}</h1>
            <p>These {{ product }} are amazing {{ product }}</p>
            
            <!-- if else  -->
            <p v-if="inStock">In stock</p>
            <p v-else :class="{ disbaledOutOfStock: !inStock }">Out of stock</p>

            <!-- list from js -->
            <ul> 
                <li v-for="size in sizes">{{ size }}</li>
            </ul>

            <!-- hover over green and blue -->
            <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor}"
                @mouseover="updateProduct(index)">
            </div>

            <!-- event listener  -->
            <button v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock }" >Add to Cart</button>
        
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
        </div>

    </div>

    `,

    data() {
        return {
            brand: 'Felicias',
            product: 'Socks',
            selectedVariant: 0,
            sizes: ['s', 'm', 'l', 'xl'],
            variants: [
                {
                    variantId: 1,
                    variantColor: 'Green',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 2, 
                    variantColor: 'Blue',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0,
                }
            ],
            cart: 0,
        }
    },
        
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
            console.log(index)
        },
    },
    computed: {
        titel() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }  
})

var app = new Vue ({
    el: '#app'
})