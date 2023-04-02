const form = document.querySelector('[data-form]');
const mail = document.querySelector('[data-email]');
const pass = document.querySelector('[data-password]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    console.log("submit")

    const user = await validate()

    if (user) {
        console.log('we have this user in the database')

        window.location.href = '../screens/adminProducts.html'
    } else {
        console.log('email or password - wrong or user not found')
        swal.fire({
            icon: 'error',
            text: 'email or password - wrong or user not found',
            width: '15rem',
            height: '10rem'
        });
    }
})

async function getUsers() {
    const response = await fetch('https://api-arbolvida.onrender.com/usuarios/')
    return await response.json();
}

async function validate() {
    const users = await getUsers()

    console.log({users})

    const found = users.find((user) => user.email === mail.value && user.password === pass.value);

    console.log({found})

    return found;
}
