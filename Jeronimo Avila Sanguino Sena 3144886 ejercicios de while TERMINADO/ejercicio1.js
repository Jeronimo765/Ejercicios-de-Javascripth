let saldoCuenta = 30000;
let nombre = "Ana López";
let valor = false;

while (!valor) {
    let opcion = Number(prompt(`Bienvenido, seleccione \n 1. Consultar salario \n 2. Salir`));

    switch (opcion) {
        case 1:
            let horas = Number(prompt("Ingrese el número de horas trabajadas:"));
            let tarifa = horas >= 10 ? 30000 : 33000;
            let salario = horas * tarifa;
            console.log(`Señor/a ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a ${salario}.`);
            break;
        case 2:
            console.log("Gracias por usar el sistema.");
            valor = true;
            break;
        default:
            console.log("Opción no válida, intente nuevamente.");
    }
}
