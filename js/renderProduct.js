// const viewAllBtn = document.getElementById('view-all-btn');
// viewAllBtn.addEventListener('click', () => {
//     let products = JSON.parse(localStorage.getItem('products'));
//     const filteredList = products.filter(product => product.type === 'monitor');
//     localStorage.setItem('searchProduct', JSON.stringify(filteredList));
//     window.location.replace("./danhsachsanpham.html");
// })
// const products = JSON.parse(localStorage.getItem('products')).filter(product => product.type === 'monitor');
// $(function () {
//     let container = $('#pagination');
//     container.pagination({
//         dataSource: [
//             ...products,
//         ],
//         pageSize: 5,
//         callback: function (data, pagination) {
//             var dataHtml = '<ul class="container product-list">';
//             $.each(data, function (index, product) {
//                 dataHtml += `
//                     <li>
//                     <a href="#" onClick="viewProduct('${product.id}')" class="product-item" >
//                         <img src="${product.img}" class="product-item__img" alt="${product.name}">
//                         <h1 class="product-item__name">${product.name}</h1>
//                         <p class="product-item__price">${formatPrice(product.price)}</p>
//                     </a>
//                     </li>
//                 `;
//             });
//             dataHtml += '</ul>';
//             $("#data-container").html(dataHtml);
//         }
//     })
// })

window.onload = function () {
    renderProduct('monitor');
    renderProduct('vga');
    renderProduct('cpu');
    renderProduct('pc');
    renderProduct('gear');
}

function renderProduct(productType) {
    const products = JSON.parse(localStorage.getItem('products')).filter(product => product.type === productType);
    products.length = 10;
    $(function () {
        let container = $('#pagination' + `__${productType}`);
        container.pagination({
            dataSource: [
                ...products,
            ],
            pageSize: 5,
            callback: function (data, pagination) {
                var dataHtml = '<ul class="container product-list">';
                $.each(data, function (index, product) {
                    dataHtml += `
                        <li>
                        <a href="#" onClick="viewProduct('${product.id}')" class="product-item" >
                            <img src="${product.img}" class="product-item__img" alt="${product.name}">
                            <h1 class="product-item__name">${product.name}</h1>
                            <p class="product-item__price">${formatPrice(product.price)}</p>
                        </a>
                        </li>
                    `;
                });
                dataHtml += '</ul>';
                $("#data-container" + `__${productType}`).html(dataHtml);
            }
        })
    })
}

function viewAllProduct(productType) {
    let products = JSON.parse(localStorage.getItem('products'));
    const filteredList = products.filter(product => product.type === productType);
    localStorage.setItem('searchProduct', JSON.stringify(filteredList));
    window.location.replace("./danhsachsanpham.html");
}