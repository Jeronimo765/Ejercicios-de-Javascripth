
let productos = ["Galletas", "Chocolatina", "Papas", "Gaseosas", "Caramelos"];
let stock = [3, 2, 5, 4, 1];
const precio = 1;

function mostrarInventario() {
    console.log("Inventario de la máquina expendedora:");
    for (let i = 0; i < productos.length; i++) { // Devuelve la cantidad total de productos en este caso 5
        console.log(`${i + 1}. ${productos[i]} - stock: ${stock[i]}`); // Recorre la lista de productos uno por uno (Muestra cada producto con su numero de stock)
    }
}

function sugerirProducto() {
    for (let i = 0; i < stock.length; i++) {
        if (stock[i] > 0) {
            return productos[i]; // Devuelve el primer producto disponible
        }
    }
    return null; // Si todos los productos están agotados
}

function comprarProducto(codigo) {
    let indice = codigo - 1; // Convertir código a índice de array

    if (indice < 0 || indice >= productos.length) { // Si el código es menor que 1 por lo tanto es inválido
        console.log("Código inválido. Intente de nuevo."); // Si el código es mayor que la cantidad de productos también es inválido
        return;
    }

    if (stock[indice] === 0) { // Para verificar si no hay unidades
        console.log(`El producto ${productos[indice]} está agotado`);
        let sugerencia = sugerirProducto();
        if (sugerencia) {
            console.log(`Sugerencia: Puedes comprar ${sugerencia} en su lugar`); // Para buscar un producto con stock disponible (Si hay otro producto lo sugiere al usuario)
        } else {
            console.log("Lo sentimos, la máquina no tiene más productos disponibles");
        }
        return;
    }
    stock[indice]--; // Reduce el stock del producto en 1 unidad
    console.log(`Has comprado ${productos[indice]} ¡Disfrútalo!`); // Muestra un mensaje confirmando la compra
}

while (true) {
    mostrarInventario();
    let opcion = prompt("Ingrese el número del producto que desea comprar (o '0' para salir):");

    if (opcion === "0") {
        console.log("Gracias por usar la máquina expendedora. ¡Hasta luego!");
        break;
    }
    comprarProducto(parseInt(opcion));
}
