import {userServicios} from "../servicios/user-service.js";

const form = document.querySelector('[data-form]');
const nombre = document.querySelector('[data-nombre]');
const email = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');

const url = new URL(window.location);
const id = url.searchParams.get("id");

const getInfo = async () => {
    try {
        const usuario = await userServicios.detalleUsuario(id);
        nombre.value = usuario.name;
        email.value = usuario.email;
        password.value = usuario.password;
    } catch (error) {
        console.error("Hubo un Error", error);
    }
};

if (id) {
    getInfo();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        userServicios.updateUsuario(nombre.value, email.value, password.value, id).then(() => {
            alert('Usuario editado con exito')
            window.location.href = '../screens/usuarios.html'
        })
    })
} else {
    alert("ERROR, no se encontro el id")
}


