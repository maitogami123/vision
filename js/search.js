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
        document.getElementById('search-box').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
    `;
    }
})

searchInput.addEventListener('focus', () => {
    document.getElementById('search-box').innerHTML = `
        <li  class="search-item-wrapper nohover">
            Bạn muốn tìm sản phẩm...
        </li>
    `;
})

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        document.getElementById('search-box').innerHTML = ""
    }, 1000)
})

function displaySearchItem(productList) {
    let htmls = productList.map((product) => {
        return `
            <li  class="search-item-wrapper" onClick="viewProduct('${product.id}')">
                <img src="${product.img}" class="search-item__img">
                <div class="search-item-info">
                    <h3 class="search-item__name">${product.name}</h3>
                    <p class="search-item__price">${formatPrice(product.price)}</p>
                </div>
            </li>
        `
    });
    let reducedHtmls = htmls;
    reducedHtmls.length = 4;
    reducedHtmls = [...reducedHtmls, `
         <li class="search-item-wrapper jsViewProduct">
             Xem tất cả sản phẩm...
         </li>
     `]
     document.getElementById('search-box').innerHTML = reducedHtmls.join('');
     document.querySelector('.jsViewProduct').addEventListener('click', () => {
        localStorage.setItem('searchProduct', JSON.stringify(productList));
        window.location.replace("./danhsachsanpham.html");
     })
     document.getElementById('search-btn').addEventListener('click', () => {
        localStorage.setItem('searchProduct', JSON.stringify(productList));
        window.location.replace("./danhsachsanpham.html");
     })
}
