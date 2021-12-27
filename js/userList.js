function renderUser() {
    const userList = JSON.parse(localStorage.getItem('userList'));
    let htmls = userList.map((user, index) => {
        return `
        <li class="accout__infor">
            <span class="accout__code">${user.username}</span>
            <span class="accout__name-full">${user.fullname}</span>
            <span class="accout__name-user">${user.role}</span>
            <span class="accout__date-regis">${user.phoneNumber}</span>
            <button type="button" class="btndelete" onclick="handleDeleteUser('${user.username}')">Xóa</button>
        </li>
        `
    })
    document.querySelector('.account-wrapper').innerHTML = htmls.join('');
}

window.onload = () => {
    renderUser();
}

function handleDeleteUser(username) {
    const userList = JSON.parse(localStorage.getItem('userList'));
    let index = userList.findIndex(user => user.username === username);
    userList.splice(index, 1);
    localStorage.setItem('userList', JSON.stringify(userList))
    renderUser();
}