window.onload = () => {
    renderCart(getCart());
}

function getCart() {
    let cartItems = JSON.parse(localStorage.getItem("orderToview"));
    return cartItems;
}

function renderCart(order) {
    let user = JSON.parse(localStorage.getItem("sectionUserName"))
    if (user.role == "admin") {
        document.getElementById('empty-cart').classList.add('hide');
        document.getElementById('cart__payment').classList.remove('hide');
        if (document.querySelector('.btndelete').classList.contains('hide')) {
            document.querySelector('.btndelete').classList.remove('hide');
        }
        let htmls = order.cartItems.map((item, index) => {
            return `
                <div class="product__list-item">
                        <span class="item__code">${index + 1}</span>
                        <img src="${item.img}" alt="">
                        <p class="item__name">${item.name}</p>
                        <div class="item__change">
                            <div class="item__change-mini">
                            <input disabled type="text" id="quantity" onchange="handleChangeQuantity('${item.id}');" name="quantity" value="${item.quantity}">
                            </div>
                        </div>
                        <span class="price">${formatPrice(item.price)}</span>
                </div>
            `
        });
        document.getElementById('cart-product').innerHTML = htmls.join('');
        document.getElementById('pricing').innerHTML = formatPrice(order.total);
        document.getElementById('status').disabled = false;
        document.getElementById('status').value = order.status;
        document.getElementById('payment').innerHTML = order.paymentMethod;
        document.getElementById('date').innerHTML = order.date;
    } else {
        document.getElementById('empty-cart').classList.add('hide');
        document.getElementById('cart__payment').classList.remove('hide');
        if (!document.querySelector('.btndelete').classList.contains('hide')) {
            document.querySelector('.btndelete').classList.add('hide');
        }
        let htmls = order.cartItems.map((item, index) => {
            return `
                <div class="product__list-item">
                        <span class="item__code">${index + 1}</span>
                        <img src="${item.img}" alt="">
                        <p class="item__name">${item.name}</p>
                        <div class="item__change">
                            <div class="item__change-mini">
                            <input disabled type="text" id="quantity" onchange="handleChangeQuantity('${item.id}');" name="quantity" value="${item.quantity}">
                            </div>
                        </div>
                        <span class="price">${formatPrice(item.price)}</span>
                </div>
            `
        });
        document.getElementById('cart-product').innerHTML = htmls.join('');
        document.getElementById('pricing').innerHTML = formatPrice(order.total);
        document.getElementById('status').disabled = true;
        document.getElementById('status').value = order.status;
        document.getElementById('payment').innerHTML = order.paymentMethod;
        document.getElementById('date').innerHTML = order.date;
    }
}

function handleChangeStatus() {
    document.querySelector('.btnpay').classList.remove('hide');
}

function handleUpdateOrder() {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let orderEditing = getCart();
    let index = orderList.findIndex(product => product.id === orderEditing.id);
    orderList[index].status = document.getElementById('status').value;
    localStorage.setItem('orderToview', JSON.stringify(orderList[index]));
    localStorage.setItem('cartList', JSON.stringify(orderList));
    renderCart(getCart());
    document.querySelector('.btnpay').classList.add('hide');
}

function handleDeleteOrder() {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let orderDeleting = getCart();
    let index = orderList.findIndex(product => product.id === orderDeleting.id);
    orderList.splice(index, 1);
    localStorage.setItem('cartList', JSON.stringify(orderList));
    localStorage.removeItem('orderToview');
    window.location.replace('./quanlydonhang.html');
}