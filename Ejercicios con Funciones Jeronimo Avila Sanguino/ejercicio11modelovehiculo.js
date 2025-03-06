let valor = true; 

do {
    let opcion = Number(prompt("Ingrese una opción: \n1. Seleccionar el modelo de su vehículo \n2. Salir"));

    switch (opcion) {
        case 1:
            function verificarModelo(modelo) {
                let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
                if (isNaN(modelo)) {
                    return "Por favor, ingrese un número válido.";
                } else if (modelosDefectuosos.includes(modelo)) {
                    return "El automóvil está defectuoso, debe llevarlo a garantía.";
                } else {
                    return "Su automóvil no está defectuoso.";
                }
            }

            let numeroModelo = Number(prompt("Ingrese el número de modelo de su vehículo:"));
            console.log(verificarModelo(numeroModelo));
            break;

        case 2:
            valor = false; 
            console.log("Saliendo del programa...");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
} while (valor);
