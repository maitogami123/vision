const logAndReg = document.getElementById('log-and-reg');
const userSection = document.getElementById('user-section');
const userInfo = JSON.parse(localStorage.getItem('sectionUserName'));

if (userInfo) {
    logAndReg.classList.add('hide');
    userSection.classList.remove('hide');
    const username = document.querySelector('.user-name');
    username.innerHTML = `<span class="user-name-wrapper"><i class="ti-user"></i> ${userInfo.username}</span>`;
    if (userInfo.role === 'admin') {
        if (document.querySelector('.to-admin'))
            document.querySelector('.to-admin').classList.remove('hide');
    }
} else {
    logAndReg.classList.remove('hide');
    userSection.classList.add('hide');
}

const logoutBtn = document.getElementById('logout-btn')

logoutBtn.onclick = () => {
    document.querySelector('.to-admin').classList.add('hide');
    localStorage.removeItem('sectionUserName');
    localStorage.removeItem('cartItems');
    window.location.replace("./index.html");
}

