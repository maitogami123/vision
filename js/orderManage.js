window.onload = () => {
    let sectionUser = JSON.parse(window.localStorage.getItem('sectionUserName'));
    if (sectionUser.role === 'user') {
        renderOrderUser(sectionUser.username);
    } else {
        renderOrder();
    }
}

function renderOrder() {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let htmls = orderList.map(order => {
        return `
            <li class="order__infor" onclick="handleChangeStatus('${order.id}')">
                <span class="order__code">${order.id}</span>
                <span class="order__name-user">${order.user.fullname}</span>
                <span class="order__date">${order.date}</span>
                <span class="order__total">${formatPrice(order.total)}</span>
                <span class="order__status" id="order-status">${order.status}</span>
            </li>
        `
    })
    document.querySelector('.order-wrapper').innerHTML = htmls.join('');
}

function handleChangeStatus(id) {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let index = orderList.findIndex(product => product.id === id);
    localStorage.setItem('orderToview', JSON.stringify(orderList[index]));
    window.location.replace('./chitietdonhang.html');
}

function renderOrderUser(username) {
    let orderList = JSON.parse(localStorage.getItem('cartList'));
    let filterList = orderList.filter(order => order.user.username === username);
    console.log(filterList);
    let htmls = filterList.map(order => {
        return `
            <li class="order__infor" onclick="handleChangeStatus('${order.id}')">
                <span class="order__code">${order.id}</span>
                <span class="order__name-user">${order.user.fullname}</span>
                <span class="order__date">${order.date}</span>
                <span class="order__total">${formatPrice(order.total)}</span>
                <span class="order__status">${order.status}</span>
            </li>
        `
    })
    document.querySelector('.order-wrapper').innerHTML = htmls.join('');
}