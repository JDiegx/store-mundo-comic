let username = document.getElementById('username');
let password = document.getElementById('passwords');
let registerButton = document.getElementById('registerButton');

let usuarios = [];

registerButton.addEventListener('click', function(event){
    event.preventDefault();
    let usuario = {
        name: username.value,
        password: password.value,
        
    };
    usuarios.push(usuario);
    localStorageSend();
    window.location.href = './index.html';
    document.getElementById('form').reset();
});


function localStorageSend() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    console.log('Success');
    console.log(localStorage.getItem('usuarios'));
}