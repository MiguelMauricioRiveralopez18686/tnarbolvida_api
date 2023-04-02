const listaProductos = () =>
    fetch('https://api-arbolvida.onrender.com/productos')
        .then(respuesta => respuesta.json());

const crearProducto = (imageUrl, name, price, categoria, description) => {
    return fetch('https://api-arbolvida.onrender.com/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            description,
            id: uuid.v4()
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un producto')
        });
};

const detalleProducto = (id) => {
    return fetch(`https://api-arbolvida.onrender.com/productos${id}`).then((resp) => resp.json());
};

const deleteItem = (id) => {
    return fetch(`https://api-arbolvida.onrender.com/productos${id}`, {
        method: 'DELETE',
    });
};

const updateItem = (imageUrl, name, price, categoria, description, id) => {
    return fetch(`https://api-arbolvida.onrender.com/productos${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            description,
        })
    })
        .then(response => response)
        .catch(error => console.error(error))
};

export const productosServicios = {
    listaProductos,
    crearProducto,
    detalleProducto,
    updateItem,
    deleteItem,
};