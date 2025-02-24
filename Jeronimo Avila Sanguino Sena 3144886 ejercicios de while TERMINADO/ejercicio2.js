let valor = false;

while (!valor) {
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1. Lanzar el dado \n 2. No lanzar el dado`));

    switch (opcion) {
        case 1:
            let numero = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
            if (numero % 2 === 0) {
                console.log(`El número ${numero} es par.`);
            } else {
                console.log(`El número ${numero} es impar.`);
            }
            break;
        case 2:
            console.log("Has elegido no lanzar el dado. Saliendo...");
            valor = true; // Rompe el bucle
            break;
        default:
            console.log("Opción no válida. Inténtalo de nuevo.");
    }
}
