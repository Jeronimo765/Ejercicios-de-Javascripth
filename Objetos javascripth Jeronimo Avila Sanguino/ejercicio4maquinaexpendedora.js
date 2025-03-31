class MaquinaExpendedora {
    constructor() {
        this.productos = ["Galletas", "Chocolatina", "Papas", "Gaseosas", "Caramelos"];
        this.stock = [3, 2, 5, 4, 1];
    }

    mostrarInventario() {
        console.log("Inventario de la máquina expendedora:");
        this.productos.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto} - stock: ${this.stock[index]}`);
        });
    }

    sugerirProducto() {
        for (let i = 0; i < this.stock.length; i++) {
            if (this.stock[i] > 0) {
                return this.productos[i];
            }
        }
        return null;
    }

    comprarProducto(codigo) {
        let indice = codigo - 1;

        if (indice < 0 || indice >= this.productos.length) {
            console.log("Código inválido. Intente de nuevo.");
            return;
        }

        if (this.stock[indice] === 0) {
            console.log(`El producto ${this.productos[indice]} está agotado`);
            let sugerencia = this.sugerirProducto();
            if (sugerencia) {
                console.log(`Sugerencia: Puedes comprar ${sugerencia} en su lugar`);
            } else {
                console.log("Lo sentimos, la máquina no tiene más productos disponibles");
            }
            return;
        }
        this.stock[indice]--;
        console.log(`Has comprado ${this.productos[indice]} ¡Disfrútalo!`);
    }
}

const maquina = new MaquinaExpendedora();

while (true) {
    maquina.mostrarInventario();
    let opcion = prompt("Ingrese el número del producto que desea comprar (o '0' para salir):");
    
    if (opcion === "0") {
        console.log("Gracias por usar la máquina expendedora. ¡Hasta luego!");
        break;
    }
    maquina.comprarProducto(parseInt(opcion));
}
