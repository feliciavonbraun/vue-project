Vue.component('product', {
    template: `
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image">
        </div>

        <div class="product-info">
            <h1> {{ titel }}</h1>
            <p>These {{ product }} are amazing {{ product }} cause the material {{ product }} is very {{ product }}y </p>
            
            <p v-if="inStock">In stock</p>
            <p v-else :class="{ disbaledOutOfStock: !inStock }">Out of stock</p>

            <ul> 
                <li v-for="size in sizes">{{ size }}</li>
            </ul>

            <!-- hover over black and blue -->
            <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                :style="{ backgroundColor: variant.variantColor}"
                @mouseover="updateProduct(index)">
            </div>

            <!-- event listener  -->
            <button v-on:click="addToCart" 
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock }" >Add to Cart
            </button>
        
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
        </div>

    </div>

    `,

    data() {
        return {
            brand: 'Felicias',
            product: 'jeans',
            selectedVariant: 0,
            sizes: ['s', 'm', 'l', 'xl'],
            variants: [
                {
                    variantId: 1,
                    variantColor: 'Black',
                    variantImage: 'https://media.nelly.com/i/nlyscandinavia/440599-0426_06?qlt=100&maxW=2560',
                    variantQuantity: 10,
                },
                {
                    variantId: 2, 
                    variantColor: 'Blue',
                    variantImage: 'https://media.nelly.com/i/nlyscandinavia/440599-2257_06?qlt=100&maxW=2560',
                    variantQuantity: 0,
                },
                {
                    variantId: 3, 
                    variantColor: 'Pink',
                    variantImage: 'https://media.nelly.com/i/nlyscandinavia/440599-0029_01?qlt=100&maxW=2560',
                    variantQuantity: 2,
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