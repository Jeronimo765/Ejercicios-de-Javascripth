let valor = true; 

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Ingresar tres números para encontrar el mayor\n2. Salir"));

    switch (opcion) {
        case 1:
            let num1 = Number(prompt("Ingrese el primer número:"));
            let num2 = Number(prompt("Ingrese el segundo número:"));
            let num3 = Number(prompt("Ingrese el tercer número:"));

            
            function encontrarMayor(num1, num2, num3) {
                if (num1 >= num2 && num1 >= num3) {
                    return num1;
                } else if (num2 >= num1 && num2 >= num3) {
                    return num2;
                } else {
                    return num3;
                }
            }

            let mayor = encontrarMayor(num1, num2, num3);
            console.log(`El número mayor es: ${mayor}`);
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
