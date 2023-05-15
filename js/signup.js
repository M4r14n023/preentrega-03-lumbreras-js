const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        // return alert('El usuario ya esta registado!')
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'El usuario ya esta registado!',
            showConfirmButton: false,
            timer: 1500
})
    } else {
        Users.push({name: name, email: email, password: password})
        localStorage.setItem('users', JSON.stringify(Users))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro Exitoso!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href = '../index.html'
        })
    }
})

