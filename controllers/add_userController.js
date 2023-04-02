import {userServicios} from "../servicios/user-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.querySelector('[data-name]').value;
    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    userServicios.crearUsuario(  name, email, password).then(respuesta => {
        window.location.href = "../screens/login.html"
        alert("el usuario fue creado con exito")
        console.log(respuesta)
    })
        .catch((err) => {
            console.log(err)
        })
})
