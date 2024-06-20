const productos = [
    {
        idProducto: 1,
        nombre: 'Ñoquis',
        descripcion: '500gr de Ñoquis ',
        imagen: '/Img/nioquis2.jpg',
        precio: 2500,
        estaEnCarrito: false
    },
    {
        idProducto: 2,
        nombre: 'Capelettis',
        descripcion: 'Capelettis rellenos de jamón y queso',
        imagen: '/Img/Capelettis jyq.jpg',
        precio: 4000,
        estaEnCarrito: false
    },
    {
        idProducto: 3,
        nombre: 'Sorrentinos',
        descripcion: 'Sorrentinos rellenos de jamón y queso',
        imagen: '/Img/SorrentinosProductos.jpg',
        precio: 4500,
        estaEnCarrito: true
    },
    {
        idProducto: 4,
        nombre: 'Masa para Lasaña',
        descripcion: 'Masa para lasaña',
        imagen: '/Img/MasaProductos.jpg',
        precio: 2000,
        estaEnCarrito: false
    },
    {
        idProducto: 5,
        nombre: 'Spaghettis',
        descripcion: 'Spaghettis',
        imagen: '/Img/SpaghettiProductos.jpg',
        precio: 2500,
        estaEnCarrito: true
    },
    {
        idProducto: 6,
        nombre: 'Fideos Codito',
        descripcion: '500gr de Fideos codito',
        imagen: '/Img/FideosCoditoProductos.jpg',
        precio: 2500,
        estaEnCarrito: false
    },
    {
        idProducto: 7,
        nombre: 'Ravioles',
        descripcion: 'Ravioles de verdura',
        imagen: '/Img/Raviolesdeverdura.jpg',
        precio: 4000,
        estaEnCarrito: true
    },
    {
        idProducto: 8,
        nombre: 'Ñoquis de Calabaza',
        descripcion: 'Ñoquis de calabaza',
        imagen: '/Img/nioquisDeCalabaza.jpg',
        precio: 4000,
        estaEnCarrito: true
    },
    {
        idProducto: 9,
        nombre: 'Spaghetti de Remolacha',
        descripcion: 'Spaghetti de remolacha',
        imagen: '/Img/FideosdeRemolacha.jpg',
        precio: 4000,
        estaEnCarrito: true
    },
    {
        idProducto: 10,
        nombre: 'Canelones rellenos con Carne',
        descripcion: 'Canelones',
        imagen: '/Img/Canelones.jpg',
        precio: 4500,
        estaEnCarrito: false
    },
    {
        idProducto: 11,
        nombre: 'Salsa Pesto',
        descripcion: 'Salsa Pesto',
        imagen: '/Img/SalsaPesto.jpg',
        precio: 1500,
        estaEnCarrito: false
    },
    {
        idProducto: 12,
        nombre: 'Salsa 4 Quesos',
        descripcion: 'Salsa 4 quesos',
        imagen: '/Img/Salsa4Quesos.jpg',
        precio: 1800,
        estaEnCarrito: false
    },
    {
        idProducto: 13,
        nombre: 'Salsa Fileto',
        descripcion: 'Salsa Fileto',
        imagen: '/Img/SalsaFileto.jpg',
        precio: 1500,
        estaEnCarrito: true
    },
    {
        idProducto: 14,
        nombre: 'Salsa de Hongos',
        descripcion: 'Salsa de hongos',
        imagen: '/Img/SalsaHongos.jpg',
        precio: 1500,
        estaEnCarrito: true
    },
    {
        idProducto: 15,
        nombre: 'Salsa Boloñesa',
        descripcion: 'Salsa boloñesa',
        imagen: '/Img/SalsaBolognesa.jpg',
        precio: 1500,
        estaEnCarrito: true
    },
    {
        idProducto: 16,
        nombre: 'Queso Rallado',
        descripcion: 'Queso rallado reggianito',
        imagen: '/Img/Queso 2.png',
        precio: 1300,
        estaEnCarrito: true
    }


];

const container = document.getElementById('product-list');

productos.forEach(producto => {
    const productHTML = `
    <div class="card col-12 col-sm-5 col-lg-3">
      <div class="sc-product-item d-flex flex-column gap-2 align-items-center">
        <img data-name="product_image" src="${producto.imagen}" alt="${producto.nombre}" class="img-limitada">
        <h4 data-name="product_name" class="pt-3 titleProduct">${producto.nombre}</h4>
        <p data-name="product_desc" class="descProduct">${producto.descripcion}</p>
        <input name="product_price" value="${producto.precio.toFixed(2)}" type="hidden">
        <p>$${producto.precio.toFixed(2)}</p>
        <input name="product_id" value="${producto.idProducto}" type="hidden">
        <button class="sc-add-to-cart btn btn-success mb-3">Agregar al Carrito</button>
    </div >
        `;

    container.innerHTML += productHTML;
});

$(document).ready(function () {
    $('#smartcart').smartCart();
});

const cart = document.querySelector('.cart')

function abrirCarrito() {
    $("#carrito").css("width", "350px");
    cart.classList.add('hide')
}

function cerrarCarrito() {
    $("#carrito").css("width", "0");
    cart.classList.remove('hide')
}