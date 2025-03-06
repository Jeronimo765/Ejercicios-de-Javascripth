let valor = true;

while (valor) {
    let opcion = Number(prompt(`Bienvenido seleccione: \n 1. Registrar sus horas trabajadas \n 2. Salir`));

    switch (opcion) { 
        case 1:
            let nombre = prompt(`Ingrese su nombre:`);
            let horas = Number(prompt("Ingrese la cantidad de horas trabajadas: "));

            function calcularSalario(horas) {
                return horas <= 10 ? horas * 30000 : horas * 33000;
            }

            let salario = calcularSalario(horas);
            console.log(`Señor/a ${nombre}, el número de horas trabajadas es ${horas} y su salario equivale a ${salario}.`);
            break;

        case 2:
            valor = false;
            console.log("Gracias por usar el sistema.");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
}
