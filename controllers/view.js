document.addEventListener('DOMContentLoaded', () => {
    const productDetails = document.getElementById('productDetails');

    // Cargar productos guardados al cargar la página
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        const products = JSON.parse(savedProducts);
        const product = products[products.length - 1]; // Mostrar el último producto agregado

        if (product) {
            productDetails.innerHTML = `
                <p><strong>Nombre del Producto:</strong> ${product.name}</p>
                <p><strong>Precio:</strong> $${product.price}</p>
                <p><strong>Descripción:</strong> ${product.description}</p>
                <p><strong>Foto del Producto:</strong></p>
                <img src="${product.photo}" alt="${product.name}" class="product-image">
                <p><strong>Depósito:</strong> ${product.depotView}</p>
            `;
        } else {
            productDetails.innerHTML = `<p>No hay detalles del producto guardados.</p>`;
        }
    } else {
        productDetails.innerHTML = `<p>No hay productos guardados.</p>`;
    }
});