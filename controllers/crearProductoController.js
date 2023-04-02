import {productosServicios} from "../servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const url = document.querySelector('[data-url]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;
    const categoria = document.querySelector('[data-categoria]');

    const [selectedCategory] = [].filter
        .call(categoria.options, option => option.selected)
        .map(option => option.text);

    productosServicios.crearProducto(url, nombre, precio, selectedCategory, descripcion).then(respuesta => {
        alert('El PRODUCTO FUE CREADO CON EXITO')

        window.location.href = '../screens/adminProducts.html'

        console.log(respuesta)
    }).catch(err => {
        console.log(err)
    });
})


