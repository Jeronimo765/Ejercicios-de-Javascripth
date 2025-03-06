let valor = false;
function mostrarMenu() {
    return Number(prompt(`Bienvenido, seleccione: \n 1. Lanzar el dado \n 2. No lanzar el dado`));
}
function lanzarDado() {
    return Math.floor(Math.random() * 100) + 1; 
}
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}
while (!valor) {
    let opcion = mostrarMenu();

    switch (opcion) {
        case 1:
            let numero = lanzarDado();
            verificarParImpar(numero);
            break;
        case 2:
            console.log("Has elegido no lanzar el dado. Saliendo...");
            valor = true;
            break;
        default:
            console.log("Opción no válida. Inténtalo de nuevo.");
    }
}
