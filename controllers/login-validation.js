const datos = document.querySelector("#login__form");
const login__email = document.querySelector("#login__email");
const login__password = document.querySelector("#login__password");
const button = document.querySelector("#login__button");


document.addEventListener("DOMContentLoaded", function () {
    datos.addEventListener('submit', validarUserData);
});

function validarUserData(event) {
    event.preventDefault();
    const errorMsj = document.querySelector('.login__message-error')
    let email = login__email.value;
    let password = login__password.value;

    if (email.length > 0 && password.length > 0) {
        return true;
    } else {
        errorMsj.style.display = 'block';
    }
}