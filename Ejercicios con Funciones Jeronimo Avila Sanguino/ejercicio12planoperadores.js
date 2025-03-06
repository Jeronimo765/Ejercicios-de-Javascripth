let valor = true; 

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Seleccione el operador o el plan que desea adquirir \n2. Salir"));

    switch (opcion) {
        case 1:
            function obtenerDatosOperador(operador) {
                let datos = {
                    cargoFijo: 0,
                    valorMinuto: 0,
                    valorPaqueteDatos: 0
                };

                switch (operador.toLowerCase()) {
                    case "tigo":
                        datos.cargoFijo = 45000;
                        datos.valorMinuto = 4500;
                        datos.valorPaqueteDatos = 12000;
                        break;
                    case "claro":
                        datos.cargoFijo = 30000;
                        datos.valorMinuto = 100;
                        datos.valorPaqueteDatos = 18000;
                        break;
                    case "movistar":
                        datos.cargoFijo = 40000;
                        datos.valorMinuto = 250;
                        datos.valorPaqueteDatos = 8000;
                        break;
                    default:
                        console.log("Operador no válido.");
                        return null;
                }

                return datos;
            }

            function calcularTotalPagar(cargoFijo, valorMinuto, minutosInternacional, valorPaqueteDatos) {
                return cargoFijo + (valorMinuto * minutosInternacional) + valorPaqueteDatos;
            }

            function mostrarResumenPlan(operador, minutosInternacional, totalPagar) {
                console.log("Operador: " + operador);
                console.log("Minutos Internacionales: " + minutosInternacional);
                console.log("Total a pagar: $" + totalPagar);
            }

            let operador = prompt("Ingrese el operador (Tigo, Claro, Movistar):");
            let minutosInternacional = Number(prompt("Ingrese la cantidad de minutos internacionales:"));

            let datosOperador = obtenerDatosOperador(operador);

            if (datosOperador !== null) {
                let totalPagar = calcularTotalPagar(
                    datosOperador.cargoFijo,
                    datosOperador.valorMinuto,
                    minutosInternacional,
                    datosOperador.valorPaqueteDatos
                );

                mostrarResumenPlan(operador, minutosInternacional, totalPagar);
            }
            break;

        case 2:
            valor = false; 
            console.log("Gracias por utilizar el sistema.");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
} while (valor);
