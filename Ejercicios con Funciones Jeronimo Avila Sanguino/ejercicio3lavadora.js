function calcularCosto(tipoLavadora, cantidad, horas) {
    let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;
    let costoTotal = cantidad * horas * costoPorHora;

    
    if (cantidad > 3) {
        costoTotal -= costoTotal * 0.03;
    }

    return costoTotal;
}

let valor = false;
while (!valor) {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Ingresar los datos de su lavadora \n2. Salir"));

    switch (opcion) {
        case 1:
            let tipoLavadora = Number(prompt("Ingrese el tipo de lavadora (1 o 2):"));
            let cantidad = Number(prompt("Ingrese la cantidad de lavadoras que desea alquilar:"));
            let horas = Number(prompt("Ingrese las horas de alquiler:"));

            if (isNaN(tipoLavadora) || isNaN(cantidad) || isNaN(horas) || tipoLavadora < 1 || tipoLavadora > 2) {
                console.log("Error: Ingrese valores válidos.");
            } else {
                let costoTotal = calcularCosto(tipoLavadora, cantidad, horas);
                console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}`);
            }
            break;

        case 2:
            valor = true;
            console.log("Gracias por usar el servicio de alquiler de lavadoras.");
            break;

        default:
            console.log("Opción inválida. Intente de nuevo.");
            break;
    }
}
