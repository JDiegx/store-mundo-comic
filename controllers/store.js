let name = document.getElementById('name');
let price = document.getElementById ('price');
let description = document.getElementById ('description');
let photo = document.getElementById('photo');
let depotView = document.getElementById ('depot');
let buttonEnviar = document.getElementById ('buttonEnviar');

let products = [];

window.addEventListener('load', function(){
    let saveProducts = this.localStorage.getItem('saveProducts');
    if(saveProducts) {
        usuarios = JSON.parse(saveProducts);
    }
});

buttonEnviar.addEventListener('click', function(event) {
    alert('Su compra fue exitosa')
    event.preventDefault()
    let product = {
        name:name.value,
        price:price.value,
        description:description.value,
        photo:photo.value,
        depotView:depotView.value

    }
    products.push(product);
    localStorageSend();
})


function localStorageSend(){
localStorage.setItem('products',JSON.stringify(products));
        alert("¡Su compra fue exitosa, gracias por preferirnos!");
}
