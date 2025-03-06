let valor = true; // Se mantiene en true para que el ciclo se ejecute

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Digite 3 ángulos que sumados den 180 grados \n2. Salir"));

    switch (opcion) {
        case 1:
            let angulo1 = prompt("Ingrese el primer ángulo:");
            let angulo2 = prompt("Ingrese el segundo ángulo:");
            let angulo3 = prompt("Ingrese el tercer ángulo:");

            function esTrianguloValido(a1, a2, a3) {
                return (Number(a1) + Number(a2) + Number(a3)) === 180;
            }

            if (esTrianguloValido(angulo1, angulo2, angulo3)) {
                console.log("El triángulo es válido.");
            } else {
                console.log("El triángulo no es válido. La suma de los ángulos no es 180°.");
            }
            break;

        case 2:
            valor = false; // Termina el ciclo
            console.log("Gracias por usar el sistema.");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
} while (valor);
