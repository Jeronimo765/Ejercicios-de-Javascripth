class Cajero {
    constructor(saldoInicial = 1000) {
        this.saldo = saldoInicial;
        this.transacciones = [];
    }

    mostrarSaldo() {
        console.log(`Saldo actual: ${this.saldo}`);
    }

    depositarDinero(monto) {
        if (monto <= 0 || isNaN(monto)) {
            console.log("Ingresa un monto válido para depositar");
            return;
        }
        this.saldo += monto;
        this.registrarTransaccion(monto);
        console.log(`Depósito exitoso de ${monto}. Saldo actual: ${this.saldo}`);
    }

    retirarDinero(monto) {
        if (monto > 500) {
            console.log("No puedes retirar más de $500 en una sola transacción");
            return;
        }
        if (monto > this.saldo) {
            console.log("Fondos insuficientes.");
            return;
        }
        this.saldo -= monto;
        this.registrarTransaccion(-monto);
        console.log(`Retiro exitoso de ${monto}. Saldo restante: ${this.saldo}`);
    }

    registrarTransaccion(monto) {
        this.transacciones.push(monto);
        if (this.transacciones.length > 5) {
            this.transacciones.shift();
        }
    }

    mostrarTransacciones() {
        console.log("Últimas 5 transacciones:");
        if (this.transacciones.length === 0) {
            console.log("No hay transacciones aún");
        } else {
            this.transacciones.forEach((trans, index) => {
                let tipo = trans > 0 ? "Depósito" : "Retiro";
                console.log(`${index + 1}. ${tipo}: $${Math.abs(trans)}`);
            });
        }
    }
}

const cajero = new Cajero();

while (true) {
    let opcion = prompt("1. Ver saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Ver últimas transacciones\n5. Salir\nElige una opción:");

    if (opcion === "1") {
        cajero.mostrarSaldo();
    } else if (opcion === "2") {
        let num = parseFloat(prompt("Ingresa el monto a depositar:"));
        cajero.depositarDinero(num);
    } else if (opcion === "3") {
        let num = parseFloat(prompt("Ingresa el monto a retirar:"));
        cajero.retirarDinero(num);
    } else if (opcion === "4") {
        cajero.mostrarTransacciones();
    } else if (opcion === "5") {
        console.log("Saliendo del cajero...");
        break;
    } else {
        console.log("Opción inválida. Intenta de nuevo");
    }
}
