function renderProduct([product]) {
    let htmls =  `
        <div class="container">
            <div class="product__img">
            <img
                src="${product.img}"
                alt="img-laptop"
            />
            <span class="product__img-text">
                ${product.description}
            </span>
            </div>
            <div class="product__action">
            <h2 class="product__action-name">
                ${product.name != undefined ? product.name : "Không có thông tin"}
            </h2>
            <span class="price">${formatPrice(product.price)}</span>
            <div class="action__name-btn">
                <button type="button" class="name__btn-item" onClick="handleForwardToCheckOut('${product.id}')">
                    Mua ngay
                </button>
                <button type="button" class="name__btn-item" onClick="handleAddProductToCart('${product.id}')">
                    Thêm vào giỏ hàng
                </button>
            </div>
            <div class="product__delivery">
                <span class="title">Chính sách bán hàng</span>
                <div class="product__delivery-item">
                    <i><img src="./img/icon-free.jpg" alt=""></i>
                    <p class="item__text">Miễn phí giao hàng cho đơn hàng từ 800K</p>
                </div>
                <div class="product__delivery-item">
                    <i><img src="./img/icon-def.jpg" alt=""></i>
                    <p class="item__text">Cam kết hàng chính hãng 100%</p>
                </div>
                <div class="product__delivery-item">
                    <i><img src="./img/icon-change.jpg" alt=""></i>
                    <p class="item__text">Đổi trả trong vòng 10 ngày</p>
                </div>
                </div>
            </div>
        </div>
        `
    document.getElementById('product-wrapper').innerHTML = htmls;
}

function findProductByProductId() {
    let productId = localStorage.getItem('productId');
    let productList = JSON.parse(localStorage.getItem("products"));
    return productList.filter(product => product.id === productId);
}

window.onload = () => {
    renderProduct(findProductByProductId());
}
