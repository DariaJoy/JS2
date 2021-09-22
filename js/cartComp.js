const cartItem = {
    props: ['cart_item', 'img'],
    template: `<p v-if="!cartItems.length">Cart is empty</p>
        <div class="titleCart">
            <h3 class="cartH3">{{ item.product_name }}</h3>
            <img class="cartImg" :src="imgCart" alt="">
        </div>
        <div class="titleCart">
            <p class="cartP">$ {{ item.price }} </p>
            <p class="productQuantity">Quantity: {{ item.quantity }}</p>

        </div>
        <button class="cartListBtn" @click="remove(item)">
            <i class="fas fa-times"></i>
        </button>
        <div class="product-price">{{item.quantity*item.price}}
        </div>`
}

const cart = {
    components: { 'cart-item': cartItem },
    data() {
        return {
            cartUrl: '/getBasket.json',
            imgCart: 'https://placehold.it/50x100',
            showCart: false,
            cartItems: []
        }
    },
    methods: {
        addProduct(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product)
                            this.cartItems.push(prod)
                        }
                    } else {
                        console.log('Some error')
                    }
                })
        },
        remove(product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    }
                })
        }

    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data) {
                    this.cartItems.push(el);
                    this.cartItems.push(el);
                }
            })
    },
    template: `<button class="toCartBtn" @click="showCart = !showCart">
    <i class="fas fa-cart-arrow-down"></i></button>
        <div class="cartList" v-show="showCart">
            <cart-item v-for="product of cartItems"
            :key="product.id_product"
            :img="imgCart"
            :cart_item="product"></cart-item>
        </div>`
}
