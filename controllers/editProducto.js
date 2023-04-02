import {productosServicios} from "../servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');
const imgUrl = document.querySelector('[data-url]');
const nombre = document.querySelector('[data-nombre]');
const precio = document.querySelector('[data-precio]');
const descripcion = document.querySelector('[data-descripcion]');
const categoria = document.querySelector('[data-categoria]');

const url = new URL(window.location);
const id = url.searchParams.get("id");

const getInfo = async () => {
    try {
        const product = await productosServicios.detalleProducto(id);

        imgUrl.value = product.imageUrl;
        nombre.value = product.name;
        precio.value = product.price;
        categoria.value = product.categoria;
        descripcion.value = product.description;
    } catch (error) {
        alert("Hubo un Error")
    }
};

if (id) {
    getInfo();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        productosServicios.updateItem(imgUrl.value, nombre.value, precio.value, categoria.value, descripcion.value, id).then(() => {
            alert('Producto editado con exito')
            window.location.href = '../screens/adminProducts.html'
        })
    })
} else {
    alert("ERROR, no se encontro el id")
}


