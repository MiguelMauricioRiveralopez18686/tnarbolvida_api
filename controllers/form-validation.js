const datos = document.querySelector("#form__data");
const form__name = document.querySelector("#contact__nombre");
const form__mensaje = document.querySelector("#contact__mensaje");


document.addEventListener("DOMContentLoaded", function () {
    datos.addEventListener('submit', validarFormulario);
});

function validarFormulario(event) {
    event.preventDefault();

    let nombre = form__name.value;
    if (nombre.length > 40) {
        Swal.fire({
            title: "Error al digital el nombre",
            text: 'Puede contener un máximo de 40 caracteres',
            icon: 'error',
            confirmButtonText: "Continuar"
        })
        return;
    }

    let mensaje = form__mensaje.value;
    if (mensaje.length > 120) {
        Swal.fire({
            title: "Error en el mensaje",
            text: "Puede contener un máximo de 120 caracteres",
            icon: "error",
            confirmButtonText: "Continuar"
        })
        return;
    }
    this.submit();
}
