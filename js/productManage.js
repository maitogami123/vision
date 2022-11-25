window.onload = () => {
    renderProduct(getProduct());
}

const displayErrorMsg = (msg, selectElement) => {
    document.querySelector(selectElement).innerHTML = msg
 }

// ========================================== Products =======================================

function renderProduct(products) {
    $(function () {
        let container = $('#pagination');
        container.pagination({
            dataSource: [
                ...products,
            ],
            pageSize: 10,
            callback: function (data, pagination) {
                var dataHtml = '<ul id="list-product" class="product__list">';
                $.each(data, function (index, product) {
                    dataHtml += `
                    <li class="product__item">
                    <p><span class="item__type">${product.id}</span></p>
                    <img class="item__img" src="${(product.img)}" alt="" />
                    <div class="item__infor">
                        <a href="#" onClick="viewProduct('${product.id}')" class="item__name">
                            ${product.name}
                        </a>
                        <p>Giá: <span class="price">${formatPrice(product.price)}</span></p>
                    </div>
                    <div class="action">
                        <button type="button" class="btn btndelete" onclick="handleDeleteProduct('${product.id}')">Xóa</button>
                        <button type="button" class="btn btnchange" onclick="handleEditProduct('${product.id}')">Chỉnh Sửa</button>
                    </div>
                    </li>
                    `;
                });
                dataHtml += '</ul>';
                $("#data-container").html(dataHtml);
            }
        })
    })
}

document.querySelector('input[name="price"]').addEventListener('keyup', (e) => {
    let priceBox = document.querySelector('.formated-price');
    priceBox.innerHTML = formatPrice(e.target.value);
})

const validateName = (nameToValidate) => {
    if (nameToValidate.trim().length <= 0 ) {
        displayErrorMsg('Vui lòng nhập tên sản phẩm', '.addproduct__error')
        return false;
    }
    displayErrorMsg('', '.addproduct__error')
    return true;
}

const validatePrice = (priceToValidate) => {
    if (isNaN(priceToValidate)) {
        displayErrorMsg('Giá phải là số', '.addproduct__error')
        return false;
    }
    if (!priceToValidate || priceToValidate < 0) {
        displayErrorMsg('Giá sản phẩm phải lớn hơn 0', '.addproduct__error')
        return false;
    } else {
        displayErrorMsg('', '.addproduct__error')
        return true;
    }
}

const validateType = (typeToValidate) => {
    if (!typeToValidate) {
        displayErrorMsg('Vui lòng chọn loại sản phẩm', '.addproduct__error')
        return false;
    }
    displayErrorMsg('', '.addproduct__error')
    return true;
}

const validateImg = (imgToValidate) => {
    console.log(imgToValidate.files[0])
    if (imgToValidate.files.length <= 0) {
        displayErrorMsg('Vui lòng chọn ảnh sản phẩm', '.addproduct__error')
        return false;
    }
    if (imgToValidate.files[0].name.includes('.png') || imgToValidate.files[0].name.includes('.jpg')) {
        displayErrorMsg('', '.addproduct__error')
        return true;
    }
    else {
        displayErrorMsg(`Định dạng ảnh không được hỗ trợ!
        Vui lòng chọn ảnh có định dạng png hoặc jpg`, '.addproduct__error')
        return false;
    }
}

const validateInfo = (infoToValidate) => {
    if (infoToValidate.trim() <= 0) {
        displayErrorMsg('Vui lòng nhập thông tin sản phẩm', '.addproduct__error')
        return false;
    }
    displayErrorMsg('', '.addproduct__error')
    return true;
}

function handleAddProduct() {
    let newProductName = document.querySelector('input[name="nameproduct"]');
    let newProductPrice = document.querySelector('input[name="price"]');
    let newProductInfo = document.querySelector('input[name="info"]');
    let newProductType = document.querySelector('#type-select');
    let newProductImg = document.querySelector('#imgproduct');
    if (validateName(newProductName.value) && validateType(newProductType.value) 
        && validatePrice(newProductPrice.value) && validateImg(newProductImg)
        && validateInfo(newProductInfo.value)) {
        newProductImg = "./img/img-not-available.png" ;
        let newProduct = {
            id: generateUniqueId().toString(),
            name: newProductName.value,
            price: newProductPrice.value,
            type: newProductType.value,
            description: newProductInfo.value,
            img: newProductImg,
        }
        let productList = getProduct();
        productList = [...productList, newProduct];
        localStorage.setItem("products", JSON.stringify(productList));
        newProductName.value = '';
        newProductPrice.value = '';
        newProductInfo.value = '';
        newProductType.value = '';
        newProductImg.value = '';
        document.querySelector('.formated-price').innerHTML = formatPrice(0);
        renderProduct(productList);
        newProductName.focus();
    }
}

document.getElementById("create").addEventListener('click', () => {
    handleAddProduct();
});

function handleDeleteProduct(id) {
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id);
    productList.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productList));
    renderProduct(productList);
}

function handleEditProduct(id) {
    let productList = getProduct();
    let index = productList.findIndex(product => product.id === id);
    let productName = document.querySelector('input[name="nameproduct"]');
    let productPrice = document.querySelector('input[name="price"]');
    let productInfo = document.querySelector('input[name="info"]');
    let productType = document.querySelector('#type-select');
    let productImg = document.querySelector('#imgproduct');
    let saveChange = document.querySelector('#save-change');
    saveChange.classList.add('edit');
    productName.value = productList[index].name;
    productPrice.value = productList[index].price;
    productInfo.value = productList[index].description;
    productType.value = productList[index].type;
    document.querySelector('.formated-price').innerHTML = formatPrice(productList[index].price);
    saveChange.onclick = () => {
        productList[index].name = productName.value;
        productList[index].price = productPrice.value;
        productList[index].description =  productInfo.value;
        productList[index].type = productType.value;
        if (productImg.value) {
            productList[index].img = "./img/img-not-available.png";
            // productList[index].img = "./img/" + productImg.value.substring(productImg.value.lastIndexOf('\\') + 1);
        }
        localStorage.setItem("products", JSON.stringify(productList));
        renderProduct(productList);
        productName.value = '';
        productPrice.value = '';
        productInfo.value = '';
        productType.value = '';
        productImg.value = '';
        document.querySelector('.formated-price').innerHTML = formatPrice(0);
        productName.focus();
        saveChange.classList.remove('edit');
    }
}

let searchInput = document.getElementById("search-input");
searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    if (searchString) {
        const productList = getProduct();
        const filteredList = productList.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchString)
            );
        });
        renderProduct(filteredList);
    } else {
        renderProduct(getProduct());
    }
})

function viewProduct(id) {
    if (localStorage.getItem('productId')) {
      localStorage.removeItem('productId');
    }
    localStorage.setItem('productId', id);
    window.location.replace('./chitietsanpham.html');
  }