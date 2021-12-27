var products = [
    {
        id:"a100",
        img: "/img/MH_MSI_G27CQ4.jpg",
        name: "Màn hình LCD 27” MSI Optix G27CQ4 ",
        price: 8550000,
        type: "monitor",
      },
      {
        id: "a101",
        img: "/img/MH_AC_VG240Y.jpg",
        name: "Màn hình LCD 24” Acer VG240Y",
        price: 3990000,
        type: "monitor",
      },
      {
        id: "a102",
        img: "/img/MH_GL_VI01.jpg",
        name: "Màn hình LCD 27” Galax VI-01",
        price: 9990000,
        type: "monitor",
      },
      {
        id: "a103",
        img: "/img/MH_HKC_M27G5F.jpg",
        name: "Màn hình LCD 27” HKC M27G5F",
        price: 5490000,
        type: "monitor",
      },
      {
        id: "a104",
        img: "/img/MH_HKC_M27G3F.jpg",
        name: "Màn hình LCD 27” HKC M27G3F",
        price: 4790000,
        type: "monitor",
      },
      {
        id: "a105",
        img: "/img/MH_AS_VP247HAE.jpg",
        name: "Màn hình LCD 24” Asus VP247HAE",
        price: 3690000,
        type: "monitor",
      },
      {
        id: "a106",
        img: "/img/MH_AS_VY249HE.jpg",
        name: "Màn hình LCD 24” Asus VY249HE",
        price: 3990000,
        type: "monitor",
      },
      {
        id: "a107",
        img: "/img/MH_MSI_G273QF.jpg",
        name: "Màn hình LCD 27” MSI Optix G273QF",
        price: 9850000,
        type: "monitor",
      },
      {
        id: "a108",
        img: "/img/MH_GG_M27F-EK.jpg",
        name: "Màn hình LCD 27” Gigabyte M27F-EK ",
        price: 5990000,
        type: "monitor",
      },
      {
        id: "a109",
        img: "/img/MH_AOC_24G2E.jpg",
        name: "Màn hình LCD 24” AOC 24G2E/74",
        price: 4690000,
        type: "monitor",
      },
      {
        id: "a110",
        img: "/img/MH_AS_VA24DQLB.jpg",
        name: "Màn hình LCD 24” Asus VA24DQLB",
        price: 4350000,
        type: "monitor",
      },
      {
        id: "a111",
        img: "/img/MH_AS_VG27AQGL1A.jpg",
        name: "Màn hình LCD 27” Asus VG27AQGL1A TUF Gaming ZAKU II Edition",
        price: 2490000,
        type: "monitor",
      },
      {
        id: "a112",
        img: "/img/MH_PL_275M1RZ.jpg",
        name: "Màn hình LCD 27” Philips 275M1RZ/74 Momentum",
        price: 1900000,
        type: "monitor",
      },
      {
        id: "a113",
        img: "/img/LCD_AOC_AG493UCX.jpg",
        name: "Màn hình LCD 49” AOC AG493UCX/74",
        price: 5900000,
        type: "monitor",
      },
      {
        id: "a114",
        img: "/img/AS_ROG_Swift_PG259QN.jpg",
        name: "Màn hình LCD 25” Asus PG259QN Swift eSports",
        price: 9450000,
        type: "monitor",
      },
      {
        id: "a115",
        img: "/img/MH_BenQ_XL2546.jpg",
        name: "Màn hình LCD 25” BenQ Zowie XL2546",
        price: 1190000,
        type: "monitor",
      },
      {
        id: "a116",
        img: "/img/AOC_G3908VWX_144Hz.jpg",
        name: "Màn hình LCD 39” AOC G3908VWX ",
        price: 8900000,
        type: "monitor",
      },
      {
        id: "a117",
        img: "/img/MH_INFINI_UG.jpg",
        name: "Màn hình LCD 32” Infini Real UG-329",
        price: 6900000,
        type: "monitor",
      },
      {
        id: "a118",
        img: "/img/MH_AS_TUF_VG279QM.jpg",
        name: "Màn hình LCD 27” Asus VG279QM TUF Gaming",
        price: 9850000,
        type: "monitor",
      },
      {
        id: "a119",
        img: "/img/AOC_27_AG273QCX74.jpg",
        name: "Màn hình LCD 27” AOC Agon AG273QCX/74 ",
        price: 8590000,
        type: "monitor",
      },
];

// ================================ Utilities Function ===========================================

function formatPrice(price) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return formatter.format(price); 
}

function generateProduct() {
    localStorage.setItem("products", JSON.stringify(products));
    renderProduct(products);
}

function generateUniqueId() {
    let id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return id;
}

function getProduct() {
    let productList = JSON.parse(localStorage.getItem("products"));
    return productList ? productList : [];
}

// ========================================== Initial Function ==================================

window.onload = () => { 
    renderProduct(getProduct());
    renderCart(getCart());
}

// ========================================== Products ===========================================

function renderProduct(productList) {
    let htmls = productList.map((product) => {
        return `
            <li>
                <h1>${product.name}</h1>
                <p>${formatPrice(product.price)}</p>
                ${product.description}
                <button onclick="handleDeleteProduct('${product.id}')"> Xóa </button>
                <button onclick="handleEditProduct('${product.id}')"> Edit </button>
                <button onclick="handleAddProductToCart('${product.id}')"> Thêm </button>
            </li>
        `
    });
    document.getElementById('list-product').innerHTML = htmls.join('');
}

document.querySelector('input[name="price"]').addEventListener('keyup', (e) => {
    let priceBox = document.querySelector('.formated-price')
    priceBox.innerHTML = formatPrice(e.target.value)
})

function handleAddProduct() {
    let newProductName = document.querySelector('input[name="name"]');
    let newProductPrice = document.querySelector('input[name="price"]');
    let newProductInfo = document.querySelector('input[name="info"]');
    let newProductType = document.querySelector('#type-select');

    if (newProductType.value) {
        let newProduct = {
            id: generateUniqueId().toString(),
            name: newProductName.value,
            price: newProductPrice.value,
            type: newProductType.value,
            description: newProductInfo.value,
        }
        let productList = getProduct();
        productList = [...productList, newProduct];
        localStorage.setItem("products", JSON.stringify(productList));
        newProductName.value = '';
        newProductPrice.value = '';
        newProductInfo.value = '';
        newProductType.value = '';
        renderProduct(productList);
        newProductName.focus();
    } else {
        alert("Please select type of product");
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
    let productName = document.querySelector('input[name="name"]');
    let productPrice = document.querySelector('input[name="price"]');
    let productInfo = document.querySelector('input[name="info"]');
    let newProductType = document.querySelector('#type-select');
    let saveChange = document.querySelector('#save-change');
    saveChange.classList.add('edit');
    productName.value = productList[index].name;
    productPrice.value = productList[index].price;
    productInfo.value = productList[index].description;
    newProductType.value = productList[index].type;
    saveChange.onclick = () => {
        productList[index].name = productName.value;
        productList[index].price = productPrice.value;
        productList[index].description =  productInfo.value;
        productList[index].type = newProductType.value;
        localStorage.setItem("products", JSON.stringify(productList));
        renderProduct(productList);
        productName.value = '';
        productPrice.value = '';
        productInfo.value = '';
        newProductType.value = '';
        productName.focus();
    }
}

// ========================================== Cart ===========================================

function getCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return cartItems ? cartItems : [];
}

function renderCart(cartItems) {
    let htmls = cartItems.map((item) => {
        return `
            <li>
                <h1>${item.name}</h1>
                <p>${formatPrice(item.price)}</p>
                <button onclick="handleReduceProductToCart('${item.id}')"> - </button>
                <p>${item.quantity}</p>
                <button onclick="handleAddProductToCart('${item.id}')"> + </button>
                <button onclick="handleDeleteProductFromCart('${item.id}')"> Xóa </button>
            </li>
        `
    });
    document.getElementById('cart-product').innerHTML = htmls.join('');
    calculatePricing();
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

// ========================================== Search by keywords ===========================================

let searchBox = document.getElementById("search-box");
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
        displaySearchItem(filteredList);
    } else {
        document.getElementById('search-box').innerHTML = "Tìm kiếm sản phẩm";
    }
})

function displaySearchItem(productList) {
    let htmls = productList.map((product) => {
        return `
            <li>
                <h1>${product.name}</h1>
                <p>${formatPrice(product.price)}</p>
                ${product.description}
            </li>
        `
    });
    document.getElementById('search-box').innerHTML = htmls.join("");
}

// ========================================== Search by tags ===========================================

const tags = document.querySelectorAll('.tag-btn');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tag.classList.toggle('active');
        renderTagFilterList(filterList());
    })
})

function filterList() {
    const productList = getProduct();
    let filteredList = [];
    tags.forEach(tag => {
        if(tag.classList.contains('active')) {
            let tempList = productList.filter((product) => {
                return product.type === tag.value;
            })
            filteredList = [...filteredList, ...tempList];
        } else {
            filteredList = filteredList.filter((product) => {
                return product.type !== tag.value;
            })
        }
    })
    console.log(filteredList)
    return filteredList;
}

function renderTagFilterList(productList) {
    let htmls = productList.map((product) => {
        return `
            <li>
                <h1>${product.name}</h1>
                <p>${formatPrice(product.price)}</p>
                ${product.description}
                <button onclick="handleAddProductToCart('${product.id}')"> Thêm </button>
            </li>
        `
    });
    document.querySelector('.search-tag-box').innerHTML = htmls.join('');
}
