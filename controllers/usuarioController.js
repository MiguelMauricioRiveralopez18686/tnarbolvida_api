import {userServicios} from "../servicios/user-service.js";

const nuevoUsuario = (name, email, password, id) => {
    const addUser = document.createElement("tr");
    addUser.innerHTML = `
        <td class="td">${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>
          <ul class="table__button-control">
            <li>
              <a href="../screens/edit-usuario.html?id=${id}" class="simple-button simple-button--edit btn" data-editUser>
                Editar
              </a>
            </li>
            <li>
              <button class="simple-button simple-button--delete btn" type="button"  id="${id}" data-deleteUser>
                Eliminar
              </button>
            </li>
          </ul>
       </td>`;

    const deleteBtn = addUser.querySelector('[data-deleteUser]');
    deleteBtn.addEventListener('click', () => {
        if (id) {
            userServicios.deleteUser(id)
                .then((id) => {
                    console.log(id)
                    render();
                })
                .catch((err) => console.error("hubo un error", err))
        }
    });

    return addUser;
};

const user = document.querySelector('[data-table]');

const render = async () => {
    try {
        const listaUsuarios = await userServicios.listaUsuarios()
        if (user) {
            user.innerHTML = '';
            listaUsuarios.forEach((elemento) => {
                user.appendChild(nuevoUsuario(elemento.name, elemento.email, elemento.password, elemento.id))
            });
        }
    } catch (error) {
        console.error('Hubo un error', error)
    }
}

render();