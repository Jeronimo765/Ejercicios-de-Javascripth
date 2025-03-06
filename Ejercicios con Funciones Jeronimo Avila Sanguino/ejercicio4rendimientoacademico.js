let valor = true; 

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Ingresar el rendimiento académico de un estudiante\n2. Salir"));

    switch (opcion) {
        case 1:
            let fisica = Number(prompt("Ingrese la calificación de Física (0-10):"));
            let quimica = Number(prompt("Ingrese la calificación de Química (0-10):"));
            let biologia = Number(prompt("Ingrese la calificación de Biología (0-10):"));
            let matematicas = Number(prompt("Ingrese la calificación de Matemáticas (0-10):"));
            let informatica = Number(prompt("Ingrese la calificación de Informática (0-10):"));

            
            function calcularRendimiento(fisica, quimica, biologia, matematicas, informatica) {
                let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
                let porcentaje = (sumaCalificaciones / 50) * 100;
                let calificacion;

                if (porcentaje >= 0 && porcentaje < 60) {
                    calificacion = "Mala";
                } else if (porcentaje >= 60 && porcentaje < 80) {
                    calificacion = "Regular";
                } else if (porcentaje >= 80 && porcentaje <= 90) {
                    calificacion = "Buena";
                } else {
                    calificacion = "Excelente";
                }

                return { porcentaje, calificacion };
            }

            let resultado = calcularRendimiento(fisica, quimica, biologia, matematicas, informatica);

            console.log(`Tu porcentaje es ${resultado.porcentaje.toFixed(2)}% y tu calificación es ${resultado.calificacion}.`);
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
