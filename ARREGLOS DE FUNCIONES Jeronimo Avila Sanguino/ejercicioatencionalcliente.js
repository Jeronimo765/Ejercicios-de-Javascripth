let colaClientes = [];
const limite_cola = 7; // Capacidad de la cola

function agregarCliente(nombre) {
    if (colaClientes.length >= limite_cola) { //Length los elementos que estan dentro del array
        console.log(`La cola está llena. ${nombre} no puede entrar.`);
    } else {
        colaClientes.push(nombre); // Push para agregar clientes si la cola esta vacia
        console.log(`${nombre} se ha unido a la cola.`);
    }
}

function atenderCliente() {
    if (colaClientes.length === 0) {
        console.log("No hay clientes en la cola.");
    } else {
        let clienteAtendido = colaClientes.shift(); // Shift (primero en entrar, primero en salir)
        console.log(`${clienteAtendido} ha sido atendido.`);
    }
}

function estadoCola() {
    if (colaClientes.length === 0) {
        console.log("La cola está vacía.");
    } else {
        console.log(`Hay ${colaClientes.length} clientes en la cola: ${colaClientes.join(", ")}`);
    }
}

while (true) {
    let opcion = prompt(
        "1. Agregar Cliente\n2. Atender Cliente\n3. Ver Estado de la Cola\n4. Salir\nElige una opción:"
    );

    if (opcion === "1") {
        let nombre = prompt("Ingrese el nombre del cliente:");
        agregarCliente(nombre);
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        estadoCola();
    } else if (opcion === "4") {
        console.log("Saliendo del sistema...");
        break;
    } else {
        console.log("Opción inválida. Intenta de nuevo.");
    }
}
