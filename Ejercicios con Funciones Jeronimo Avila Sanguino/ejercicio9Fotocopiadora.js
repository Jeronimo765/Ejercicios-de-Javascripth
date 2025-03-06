let valor = true; 

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Digite la cantidad de copias que quiere adquirir \n2. Salir"));

    switch (opcion) {
        case 1:
            let copias = prompt("Ingrese la cantidad de copias que desea:");

            function calcularPrecioPorCopia(copias) {
                if (copias >= 0 && copias <= 499) {
                    return 120;
                } else if (copias >= 500 && copias <= 749) {
                    return 100;
                } else if (copias >= 750 && copias <= 999) {
                    return 80;
                } else if (copias >= 1000) {
                    return 50;
                } else {
                    return null; 
                }
            }

            function calcularPrecioTotal(copias, precioPorCopia) {
                return copias * precioPorCopia;
            }

            let precioPorCopia = calcularPrecioPorCopia(Number(copias));

            if (precioPorCopia !== null) {
                let precioTotal = calcularPrecioTotal(Number(copias), precioPorCopia);
                console.log(`Precio por copia: $${precioPorCopia}`);
                console.log(`Precio total: $${precioTotal}`);
            } else {
                console.log("Cantidad inválida de copias. Intente nuevamente.");
            }
            break;

        case 2:
            valor = false; 
            console.log("Gracias por usar el sistema.");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
} while (valor);
