const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {
    constructor(container = '.goodsList') {
        this.container = container;
        this.goods = [];
        this.allGoods = [];
        this._getGoods()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }

    _getGoods() {
        return fetch(`${API}/catalogData.json`)
            .then(data => data.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    // render() {
    //     this.container.innerHTML = '';
    //     this.goods.forEach(good => {
    //         this.container.insertAdjacentHTML('beforeEnd', this.render(good));
    //     });
    // }
    render() {
        const block = document.querySelector(this.container);
        for (let good of this.goods) {
            const goodItem = new GoodsItem(good);
            this.allGoods.push(goodItem);
            block.insertAdjacentHTML('beforeend', goodItem.render());
        }
    }
    // render() {
    //     let listHtml = '';
    //     this.goods.forEach(good => {
    //         const goodItem = new GoodsItem(good.title, good.price, good.img);
    //         listHtml += goodItem.render();
    //     });
    //     document.querySelector('.goodsList').innerHTML = listHtml;
    // }

    // getPrice() {
    //     let s = 0;
    //     this.goods.forEach(good => {
    //         s += good.price;
    //     })
    // }
};

class GoodsItem {
    constructor(product, img = 'https://images.unsplash.com/photo-1518715159541-e12050b5dd1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="goodsItem" data-id="${this.id}>
        <a class="itemPage" href="#">
        <h3 class="catalogH3">${this.title}</h3>
        <img src="${this.img}" class="catalogImg">
        <p class="catalogP">$ ${this.price}</p></a>
        <button class="itemBtn" onclick="findQuantity()">Add to Basket</button>
           </div>`
    }
};

let list = new GoodsList();

class Cart {
    constructor(container = '.cartList') {
        this.container = container;
        this.goods = [];
        this._clickCart();
        this._getCartItem()
            .then(data => {
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getCartItem() {
        return fetch(`${API}/getBasket.json`)
            .then(data => data.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const cartItem = new CartItem();
            block.insertAdjacentHTML('beforeend', cartItem.render(product));
        }
    }
    // render() {
    //     let listHtml = '';
    //     this.goods.forEach(product => {
    //         const cartItem = new CartItem(product.title, product.price, product.img);
    //         listHtml += cartItem.render();
    //     });
    //     document.querySelector('.cartList').innerHTML = listHtml;
    // }

    _clickCart() {
        document.querySelector('.toCartBtn').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }
}

class CartItem {
    render(product, img = 'https://images.unsplash.com/photo-1577138043155-7934dd897541?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80') {
        return `<div class="cartItem" data-id="${product.id_product}>
        <div class="titleCart"><h3 class="catalogH3">${product.product_name}</h3>
        <img src="${img}" class="catalogImg"></div>
        <div class="titleCart">
        <p class="catalogP">$ ${product.price}</p>
        <p class="productQuantity">Quantity: ${product.quantity}</p></div>
        <button class="cartListBtn" onclick="deliteOne"()">
        <i class="fas fa-times"></i></button>
        </div>`
    }
}


let cart = new Cart

//Домашнее задание №2
// class GoodsList {
//     constructor(container = '.goodsList') {
//         this.container = container;
//         this.goods = [];
//         this.allGoods = [];
//         this.fetchGoods();
//     }

//     fetchGoods() {
//         this.goods = [
//             { title: 'Pencil & Paper Co. Take Note Pens, Set of 4', price: 11.99, img: 'img/Note_Pens_Set_of_4.jpg' },
//             { title: 'Golden Acrylic Scissors', price: 22.99, img: 'img/Golden_Acrylic_Scissors.jpg' },
//             { title: 'Acrylic Desk Organizer', price: 32.99, img: 'img/Acrylic_Desk_Organizer.jpg' },
//             { title: 'Sprout Plantable Colored Pencils, Set of 5', price: 16.99, img: 'img/Sprout_Plantable_Colored_Pencils_Set_of_5.jpg' },
//             { title: 'Giant Paper Clips, Set of 3', price: 10.99, img: 'img/Giant_Paper_Clips_Set_of_3.jpg' },
//             { title: 'Leather Tech Pouch', price: 58.99, img: 'img/Leather_Tech_Pouch.jpg' },
//         ];
//     }
//     render() {
//         let listHtml = '';
//         this.goods.forEach(good => {
//             const goodItem = new GoodsItem(good.title, good.price, good.img);
//             listHtml += goodItem.render();
//         });
//         document.querySelector('.goodsList').innerHTML = listHtml;


//     }

//     // getPrice() {
//     //     let s = 0;
//     //     this.goods.forEach(item => {
//     //         s += item.price;
//     //     })
//     // }
// };

// class GoodsItem {
//     constructor(title, price, img) {
//         this.title = title;
//         this.price = price;
//         this.img = img;
//     }
//     render() {
//         return `<div class="goodsItem">
//         <a class="itemPage" href="#">
//         <h3 class="catalogH3">${this.title}</h3>
//         <img src="${this.img}" class="catalogImg">
//         <p class="catalogP">$ ${this.price}</p></a>
//         <button class="itemBtn" onclick="findQuantity()">Add to Basket</button>
//            </div>`
//     }
// };

// let list = new GoodsList();
// list.render();
// list.getPrice();


// class Cart {
//     addGoods() {

//     }
//     removeGoods() {

//     }
// }

// class CartList {
//     render(){}

// }
//Доработать метод*
// class CartGoodsList extends GoodsList {
//     constructor(quantity) {
//         super();
//         this.quantity = quantity;
//         findQuantity();
//     }
//     findQuantity() {
//         let s = 0;
//         this.goods.forEach(item=>{
//             s += item.price;
//         })
//     }
// };

//Домашнее задание №1
// const goods = [
//     { title: 'Pencil & Paper Co. Take Note Pens, Set of 4', price: '$11.20', img: 'img/Note_Pens_Set_of_4.jpg' },
//     { title: 'Golden Acrylic Scissors', price: '$22.00', img: 'img/Golden_Acrylic_Scissors.jpg' },
//     { title: 'Acrylic Desk Organizer', price: '$32.00', img: 'img/Acrylic_Desk_Organizer.jpg' },
//     { title: 'Sprout Plantable Colored Pencils, Set of 5', price: '$16.00', img: 'img/Sprout_Plantable_Colored_Pencils_Set_of_5.jpg' },
//     { title: 'Giant Paper Clips, Set of 3', price: '$10.00', img: 'img/Giant_Paper_Clips_Set_of_3.jpg' },
//     { title: 'Leather Tech Pouch', price: '$58.00', img: 'img/Leather_Tech_Pouch.jpg' },
// ];

// const renderGoodsItem = (title = 'Title', price = 0, img = '') => {
//     return `<div class="goodsItem">
//     <a class="itemPage" href="#">
//     <h3 class="catalogH3">${title}</h3>
//     <img src="${img}" class="catalogImg">
//     <p class="catalogP">${price}</p></a>
//     <button class="itemBtn">Add to Basket</button>
//     </div>`;
// };

// const renderGoodsList = (list = []) => {
//     let html = ''
//     list.map(item => html += renderGoodsItem(item.title, item.price, item.img));
//     document.querySelector('.goodsList').innerHTML = html
// }

// renderGoodsList(goods);


