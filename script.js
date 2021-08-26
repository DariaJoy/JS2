class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goodsItem">
        <a class="itemPage" href="#">
        <h3 class="catalogH3">${this.title}</h3>
        <img src="${this.img}" class="catalogImg">
        <p class="catalogP">${this.price}</p></a>
        <button class="itemBtn" onclick="findQuantity()">Add to Basket</button>
           </div>`
    }
};

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Pencil & Paper Co. Take Note Pens, Set of 4', price: '$11.20', img: 'img/Note_Pens_Set_of_4.jpg' },
            { title: 'Golden Acrylic Scissors', price: '$22.00', img: 'img/Golden_Acrylic_Scissors.jpg' },
            { title: 'Acrylic Desk Organizer', price: '$32.00', img: 'img/Acrylic_Desk_Organizer.jpg' },
            { title: 'Sprout Plantable Colored Pencils, Set of 5', price: '$16.00', img: 'img/Sprout_Plantable_Colored_Pencils_Set_of_5.jpg' },
            { title: 'Giant Paper Clips, Set of 3', price: '$10.00', img: 'img/Giant_Paper_Clips_Set_of_3.jpg' },
            { title: 'Leather Tech Pouch', price: '$58.00', img: 'img/Leather_Tech_Pouch.jpg' },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.goodsList').innerHTML = listHtml;
    }
};
const list = new GoodsList();
list.fetchGoods();
list.render();

class CartGoodsList extends GoodsList {
    constructor(quantity) {
        super();
        this.quantity = quantity;
        findQuantity();
    }
    findQuantity() {
        // Метод добавления одного товара в корзину при нажатии кнопки на странице index
        //Можно ли отрисвать новую карточку товара в корзине?
    }
};






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


