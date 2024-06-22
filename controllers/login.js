let username = document.getElementById('username');
let password = document.getElementById('password');
let registerButton = document.getElementById('registerButton');

let usuarios = [];

registerButton.EventListener('click', function(){
    Event.preventDefault();
    let usuario = {
        name: username.value,
        password: userpassword.value,
        register: registerButton,
    }

    usuarios.push(usuario);
    localStorage.send();
})


function localStoragesend(){
    localStorage.setItem('usuarios',JSON.stringify('usuarios'));
    console.log('Success');
    console.log(localStorage.getItem(usuarios));

}

