window.onload = () => {
    renderCart(getCart());
}

function getCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return cartItems;
}

function renderCart(cartItems) {
    if ( cartItems && cartItems.length !== 0) {
        document.getElementById('empty-cart').classList.add('hide');
        document.getElementById('cart__payment').classList.remove('hide');
        let htmls = cartItems.map((item, index) => {
            return `
                <div class="product__list-item">
                      <span class="item__code">${index + 1}</span>
                      <img src="${item.img}" alt="">
                      <p class="item__name">${item.name}</p>
                        <div class="item__change">
                          <div class="item__change-mini">
                            <button type="button" onclick="handleReduceProductToCart('${item.id}')"> - </button> 
                            <input type="text" id="quantity" onchange="handleChangeQuantity('${item.id}');" name="quantity" value="${item.quantity}">
                            <button type="button" onclick="handleAddProductToCart('${item.id}')"> + </button>
                          </div>
                          <div class="item__change-mini">
                            <button type="button" class="btndelete" onclick="handleDeleteProductFromCart('${item.id}')">Xóa</button>
                          </div>
                        </div>
                        <span class="price">${formatPrice(item.price)}</span>
                </div>
            `
        });
        document.getElementById('cart-product').innerHTML = htmls.join('');
        calculatePricing();
    } else {
        document.getElementById('empty-cart').classList.remove('hide');
        document.getElementById('cart__payment').classList.add('hide');
        document.getElementById('cart-product').innerHTML = '';
    }
}

function handleAddProductToCart(id) {
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id);
    let cartItems = getCart();
    if (cartItems.find(item => item.id === productList[index].id)) {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === productList[index].id) {
                cartItems[i]["quantity"] = cartItems[i].quantity + 1;
                break;
            }
        }
    } else {
        productList[index]["quantity"] = 1;
        cartItems = [...cartItems, productList[index]];
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}

function handleReduceProductToCart(id) {
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id);
    let cartItems = getCart();
    if (cartItems.find(item => item.id === productList[index].id)) {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === productList[index].id) {
                cartItems[i]["quantity"] = cartItems[i].quantity - 1;
                if (cartItems[i].quantity <= 0) {
                    if (confirm("Xoa mat hang?")) {
                        cartItems.splice(i, 1);
                    } else {
                        cartItems[i]["quantity"] = cartItems[i].quantity + 1;
                    }
                }
                break;
            }
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}

function handleDeleteProductFromCart(id) {
    let cartItems = getCart();
    let index = cartItems.findIndex(product => product.id === id);
    if (confirm("Xoa mat hang?")) {
        cartItems.splice(index, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}

function calculatePricing() {
    let cartItems = getCart();
    let pricing = 0;
    for (let i = 0; i < cartItems.length; i++) {
        pricing += cartItems[i].price * cartItems[i].quantity;
    }
    document.getElementById('pricing').innerHTML = formatPrice(pricing);
}

function handleChangeQuantity(id) {
    const quantity = document.getElementById('quantity');
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id);
    let cartItems = getCart();
    if (cartItems.find(item => item.id === productList[index].id)) {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === productList[index].id) {
                cartItems[i]["quantity"] = quantity.value;
                if (cartItems[i].quantity <= 0) {
                    if (confirm("Xoa mat hang?")) {
                        cartItems.splice(i, 1);
                    } else {
                        cartItems[i]["quantity"] = 1;
                    }
                }
                break;
            }
        }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(getCart());
}