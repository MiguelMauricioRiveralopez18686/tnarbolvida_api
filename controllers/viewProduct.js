import {productosServicios} from "../servicios/productos-servicios.js";
import {nuevoProducto} from "./productsController.js";

const imgProduct = document.querySelector('[data-img]');
const nameProduct = document.querySelector('[data-name]');
const priceProduct = document.querySelector('[data-price]');
const descProduct = document.querySelector('[data-descripcion]');

const url = new URL(window.location);
const id = url.searchParams.get('id');

const getInfo = async (id) => {
    try {
        const product = await productosServicios.detalleProducto(id);

        imgProduct.src = product.imageUrl;
        nameProduct.textContent = product.name;
        priceProduct.textContent = `precio: ${product.price}`;
        descProduct.textContent = `Descripción del producto: ${product.description}`;

        console.log({product, id});

        const products = await productosServicios.listaProductos();
        const allProducts = document.querySelector('[data-products]');

        allProducts.innerHTML = '';
        products.filter(p => p.categoria === product.categoria).forEach(elemento => {
            allProducts.appendChild((nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id)));
        })
    } catch (error) {
        console.error("Hubo un Error", error);
    }
};

if (id) {
    getInfo(id);
}
