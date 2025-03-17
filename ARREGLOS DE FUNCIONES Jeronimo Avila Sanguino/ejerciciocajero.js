
let saldoActual = 1000;
let transacciones = []; 

function mostrarSaldo() {
    console.log(`Saldo actual: ${saldoActual}`);
}

function depositarDinero(monto) {
    if (monto <= 0 || isNaN(monto)) {
        console.log("Ingresa un monto valido para depositar");
        return;
    }

    saldoActual += monto;
    registrarTransaccion(monto); 
    console.log(`Deposito exitoso de ${monto}. Saldo actual: ${saldoActual}`);
}

function retirarDinero(monto) {
    if (monto > 500) { 
        console.log("No puedes retirar mas de $500 en una sola transaccion");
        return;
    }
    if (monto > saldoActual) { 
        console.log("Fondos insuficientes.");
        return;
    }
    
    saldoActual -= monto;
    registrarTransaccion(-monto); 
    console.log(`Retiro exitoso de ${monto}. Saldo restante: ${saldoActual}`);
}


function registrarTransaccion(monto) {
    transacciones.push(monto); // Positivo si es depósito, negativo si es retiro
    if (transacciones.length > 5) { // Elimina la transacción más antigua si hay más de 5
        transacciones.shift();
    }
}

function mostrarTransacciones() {
    console.log("Ultimas 5 transacciones:");
    if (transacciones.length === 0) { // No hay movimientos en la cuenta
        console.log("No hay transacciones aun");
    } else {
        transacciones.forEach((trans, index) => { // Si hay transacciones, se recorren una por una usando forEach()
            let tipo = trans > 0 ? "Depósito" : "Retiro"; // Mayor a 0 es depósito, menor a 0 es retiro
            console.log(`${index + 1}. ${tipo}: $${Math.abs(trans)}`); // Index representa la posición en la lista, empieza en 0, por eso se le suma 1
        });
    }
}


while (true) {
    let opcion = prompt("1. Ver saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Ver ultimas transacciones\n5. Salir\nElige una opcion:");

    if(opcion === "1") {
        mostrarSaldo();
    } else if (opcion === "2"){
        let num = parseFloat(prompt("Ingresa el monto a depositar:"));
        depositarDinero(num);
    } else if (opcion === "3") {
        let num = parseFloat(prompt("Ingresa el monto a retirar:"));
        retirarDinero(num);
    } else if (opcion === "4") {
        mostrarTransacciones();
    } else if (opcion === "5") {
        console.log("Saliendo del cajero...");
        break;
    } else {
        console.log("Opcion invalida. Intenta de nuevo");
    }
}
