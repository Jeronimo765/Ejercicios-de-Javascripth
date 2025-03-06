let valor = true;

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Digitar la cantidad de días que desea pagar en el gimnasio \n2. Salir"));

    switch (opcion) {
        case 1:
            let dias = parseInt(prompt("Ingrese la cantidad de días que desea pagar (15, 30 o 90):")); // Convertimos a número
            
            if (isNaN(dias)) { 
                console.log("Error: No ingresó un número válido.");
                break;
            }

            let costo;
            function calcularCosto(dias) {
                if (dias === 15) {
                    return 18000;
                } else if (dias === 30) {
                    return 35000;
                } else if (dias === 90) {
                    return 86000;
                } else {
                    return null; // Si el valor no es válido, retornamos null
                }
            }

            costo = calcularCosto(dias);
            
            if (costo !== null) {
                console.log(`El costo de la mensualidad para ${dias} días es: $${costo}`);
            } else {
                console.log("Opción inválida, por favor ingrese 15, 30 o 90 días.");
            }
            break;

        case 2:
            valor = false; // Salir del bucle
            console.log("Gracias por usar el sistema.");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
} while (valor);
