class ProductoMacCosmetic {
    constructor(nombre = "", tipo = "", precio = 0, descuento = false) {
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo.toUpperCase();
        this.precio = parseFloat(precio);
        this.descuento = Boolean(descuento);
    }
}

const producto1 = new ProductoMacCosmetic("Labial", "Maquillaje", 1000, true);
const producto2 = new ProductoMacCosmetic("Base", "Maquillaje", 2000, false);
const producto3 = new ProductoMacCosmetic("Sombras", "Maquillaje", 3000, true);
const producto4 = new ProductoMacCosmetic("Corrector", "Maquillaje", 4000, false);
const producto5 = new ProductoMacCosmetic("Rubor", "Maquillaje", 5000, true);

function aplicarDescuento(producto) {
    if (producto.descuento) {
        producto.precio = (producto.precio * 0.7).toFixed(2);
    }
}

function imprimirProductos(...productos) {
    productos.forEach(producto => {
        aplicarDescuento(producto);
        for (const [clave, valor] of Object.entries(producto)) {
            console.log(`${clave}: ${valor}`);
        }
        console.log('---');
    });
}

imprimirProductos(producto1, producto2, producto3, producto4, producto5);

function mostrarProductosEnHTML(...productos) {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        aplicarDescuento(producto);

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        for (const [clave, valor] of Object.entries(producto)) {
            const detalle = document.createElement('p');
            detalle.textContent = `${clave}: ${valor}`;
            productoDiv.appendChild(detalle);
        }

        contenedor.appendChild(productoDiv);
        contenedor.appendChild(document.createElement('hr'));
    });
}

mostrarProductosEnHTML(producto1, producto2, producto3, producto4, producto5);
