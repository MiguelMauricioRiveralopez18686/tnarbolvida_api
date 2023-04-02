import {productosServicios} from "../servicios/productos-servicios.js";

export const nuevoProducto = (name, price, imageUrl, id) => {
    const contenido = `
             <div class="product__card-edit hidden ">
                <button class="btnDelete" type="button"><img src="../assets/img/icons/delete.svg" alt="edition_icon" class="iconEdit" data-delete></button>
                <a href="../screens/edit-product.html?id=${id}"><img src="../assets/img/icons/edit.svg" alt="edition_icon" class="iconEdit" data-edit></a>
            </div>
            <div class="imgContainer">
                <img class="product__card--img" src = "${imageUrl}" alt = "imagen_del_producto">
            </div>
            <div class="product__card--info">
                <p class="product__card--title">${name}</p>
                <p class="product__card--price">${price}</p>
                <a href="../screens/viewProducts.html?id=${id}"  class="product__card-boton" data-verProducto>Ver producto</a>
            </div>
    `;

    const card = document.createElement('div');
    card.setAttribute('data-product', name)
    card.innerHTML = contenido;
    card.classList.add('product__card');

    const deleteBtn = card.querySelector('.btnDelete');
    deleteBtn.addEventListener('click', () => {
        productosServicios.deleteItem(id)
            .then(() => {
                render();
            })
            .catch((err) => console.error("hubo un error", err))
    });

    return card;
};
const productos1 = document.querySelector('[data-suplementos]');
const productos2 = document.querySelector('[data-potenciadores]');
const productos3 = document.querySelector('[data-nutricionales]');
const productos4 = document.querySelector('[data-homeomaticos]');
const productos5 = document.querySelector('[data-fitoterapeuticos]');
const productos6 = document.querySelector('[data-cosmeticos]');
const adminProducts = document.querySelector('[data-adminProducts]');

const render = async () => {
    try {
        const allProducts = await productosServicios.listaProductos();

        if (adminProducts) {
            adminProducts.innerHTML = '';
            allProducts.forEach(elemento => {
                adminProducts.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos1) {
            productos1.innerHTML = '';
            allProducts.filter(product => product.categoria === 'suplementos').forEach(elemento => {
                productos1.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos2) {
            productos2.innerHTML = '';
            allProducts.filter(product => product.categoria === 'potenciadores').forEach(elemento => {
                productos2.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos3) {
            productos3.innerHTML = '';
            allProducts.filter(product => product.categoria === 'nutricionales').forEach(elemento => {
                productos3.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos4) {
            productos4.innerHTML = '';
            allProducts.filter(product => product.categoria === 'homeopaticos').forEach(elemento => {
                productos4.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
       if (productos5) {
            productos5.innerHTML = '';
            allProducts.filter(product => product.categoria === 'fitoterapeuticos').forEach(elemento => {
                productos5.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
        if (productos6) {
            productos6.innerHTML = '';
            allProducts.filter(product => product.categoria === 'cosmeticos').forEach(elemento => {
            productos6.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id));
            });
        }
    } catch (err) {
        console.error("Ocurrió un error", err);
    }
};

render();