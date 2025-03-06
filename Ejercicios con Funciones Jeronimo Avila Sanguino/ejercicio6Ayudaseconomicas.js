let valor = true; // Se mantiene en true para que el ciclo se ejecute

do {
    let opcion = Number(prompt(`Ingrese, seleccione: \n1. Ayudas económicas según género y edad \n2. Salir`));

    switch (opcion) {
        case 1:
            function calcularAyuda(genero, edad) {
                if (genero === "femenino") {
                    if (edad > 50) {
                        return 120000;
                    } else if (edad >= 30 && edad <= 50) {
                        return 100000;
                    } else {
                        return 0;
                    }
                } else if (genero === "masculino") {
                    return 40000;
                } else {
                    return "Dato inválido";
                }
            }

            let genero = prompt("Ingrese su género (femenino/masculino):").toLowerCase();
            let edad = Number(prompt("Ingrese su edad:"));

            let ayuda = calcularAyuda(genero, edad);

            if (ayuda !== "Dato inválido") {
                console.log(`El valor de ayuda mensual es: $${ayuda}`);
            } else {
                console.log("Datos ingresados no válidos. Intente nuevamente.");
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
