function handleCheckOut() {
    const message = document.getElementById('message');
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    const address = document.querySelector('#address');
    if (!address) {
        message.innerHTML = "Vui lòng nhập địa chỉ!";
    } else if (!paymentMethod) {
        message.innerHTML = "Vui lòng chọn phương thức thanh toán!";
    } else {
        handleAddCartToCartList(paymentMethod.value, address.value);
        alert('Đặt hàng thành công!');
        message.innerHTML = "";
        address.value = "";
        paymentMethod.checked = false;
    }
}

function calculatePricing() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let pricing = 0;
    for (let i = 0; i < cartItems.length; i++) {
        pricing += cartItems[i].price * cartItems[i].quantity;
    }
    return pricing;
}

function handleAddCartToCartList(paymentMethod, address) {
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;
    if (cartList) {
        console.log(cartList);
        let cartItem = JSON.parse(localStorage.getItem('cartItems'));
        let newCart = {
            id: generateUniqueId(),
            user: JSON.parse(localStorage.getItem('sectionUserName')),
            date: newdate,
            paymentMethod: paymentMethod,
            address: address,
            cartItems: cartItem,
            total: calculatePricing(),
            status: "pending", 
        }
        console.log(cartItem, newCart);
        debugger;
        cartList = [...cartList, newCart];
        localStorage.setItem('cartList', JSON.stringify(cartList));
    } else {
        let cartItem = JSON.parse(localStorage.getItem('cartItems'));
        let newCart = {
            id: generateUniqueId(),
            user: JSON.parse(localStorage.getItem('sectionUserName')),
            date: newdate,
            paymentMethod: paymentMethod,
            address: address,
            cartItems: cartItem,
            total: calculatePricing(),
            status: "pending"
        }
        cartList = [];
        cartList = [...cartList, newCart];
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }
    localStorage.removeItem('cartItems');
}