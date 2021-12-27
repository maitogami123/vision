const login = document.querySelector(".login-btn");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const textMessage = document.querySelector(".text-message");

const handleLogin = () => {
    console.log(userName.value, password.value);
    let userList = JSON.parse(localStorage.getItem('userList'));
    for (let i = 0; i < userList.length; i++) {
        console.log(userList[i].username, userList[i].password);
        if (userList[i].username.toLocaleLowerCase() === userName.value.toLocaleLowerCase() &&
         userList[i].password.toLocaleLowerCase() === password.value.toLocaleLowerCase()) {
            if (userList[i].role === 'user') {
                window.location.replace("./index.html");
                localStorage.setItem('sectionUserName', JSON.stringify(userList[i]));
            } else if (userList[i].role === 'admin') {
                window.location.replace("./admin.html");
                localStorage.setItem('sectionUserName', JSON.stringify(userList[i]));
            } else {
                console.error("Invalid role: " + userList[i].role);
            }
        } else {
            textMessage.innerText = "Tài khoản hoặc mật khẩu sai!";
        }
    }
}

login.onclick = () => {
    handleLogin();
}