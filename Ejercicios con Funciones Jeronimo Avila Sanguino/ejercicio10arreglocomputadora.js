let valor = true; 

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Solución de problemas de una computadora \n2. Salir"));

    switch (opcion) {
        case 1:
            function diagnosticarProblema(emitePitido, discoDuroGira) {
                if (emitePitido && discoDuroGira) {
                    return "Póngase en contacto con el técnico de apoyo.";
                } else if (emitePitido && !discoDuroGira) {
                    return "Verificar contactos de la unidad.";
                } else if (!emitePitido && !discoDuroGira) {
                    return "Traiga la computadora para repararla en la central.";
                } else if (!emitePitido && discoDuroGira) {
                    return "Compruebe las conexiones de altavoces.";
                }
            }

            let emitePitido = confirm("¿La computadora emite un pitido? (Aceptar = Sí, Cancelar = No)");
            let discoDuroGira = confirm("¿El disco duro gira? (Aceptar = Sí, Cancelar = No)");

            console.log(diagnosticarProblema(emitePitido, discoDuroGira));
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

