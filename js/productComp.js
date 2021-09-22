const product = {
    props: ['img', 'product'],
    template: `<div class="goodsItem">
        <img :src="imgProduct" class="catalogImg" calt="itemImage">
        <h3 class="catalogH3">{{product.product_name}}</h3>
        <p class="catalogP">{{product.price}}</p>
        <button class="itemBtn" @click="$root.$refs.cart.addProduct(product)">Add to Cart</button>
    </div>`
}

const products = {
    components: { product },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            catalogProducts: [],
            imgProduct: 'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            filtered: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regExp = new RegExp(userSearch, 'i');
            this.filtered = this.catalogProducts.filter(el => regExp.test(el.product_name))
        }

    },
    template: `<div class="product-item">
    <product
    v-for="product of filtered" 
    :key="product.id_product"
    :img="imgProduct"
    :product="product"></product>
</div>`
}