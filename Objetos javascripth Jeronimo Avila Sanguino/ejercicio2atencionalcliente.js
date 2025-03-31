const sistemaCola = {
    colaClientes: [],
    limiteCola: 7,

    agregarCliente(nombre) {
        if (this.colaClientes.length >= this.limiteCola) {
            console.log(`La cola está llena. ${nombre} no puede entrar.`);
        } else {
            this.colaClientes.push(nombre);
            console.log(`${nombre} se ha unido a la cola.`);
        }
    },

    atenderCliente() {
        if (this.colaClientes.length === 0) {
            console.log("No hay clientes en la cola.");
        } else {
            let clienteAtendido = this.colaClientes.shift();
            console.log(`${clienteAtendido} ha sido atendido.`);
        }
    },

    estadoCola() {
        if (this.colaClientes.length === 0) {
            console.log("La cola está vacía.");
        } else {
            console.log(`Hay ${this.colaClientes.length} clientes en la cola: ${this.colaClientes.join(", ")}`);
        }
    }
};

while (true) {
    let opcion = prompt(
        "1. Agregar Cliente\n2. Atender Cliente\n3. Ver Estado de la Cola\n4. Salir\nElige una opción:"
    );

    if (opcion === "1") {
        let nombre = prompt("Ingrese el nombre del cliente:");
        sistemaCola.agregarCliente(nombre);
    } else if (opcion === "2") {
        sistemaCola.atenderCliente();
    } else if (opcion === "3") {
        sistemaCola.estadoCola();
    } else if (opcion === "4") {
        console.log("Saliendo del sistema...");
        break;
    } else {
        console.log("Opción inválida. Intenta de nuevo.");
    }
}
