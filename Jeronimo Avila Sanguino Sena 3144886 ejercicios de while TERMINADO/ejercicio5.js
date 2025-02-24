//Numero mayor entre 3 numeros ingresados por el usuario//
let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n 1 Ingresar del rendimiento academico de un estudiante \n 2 salir"));
    switch (opcion){
        case 1 :
            let num1 = 10;  
            let num2 = 5;
            let num3 = 8;
            let mayor;
        if (num1 >= num2 && num1 >= num3) {
            mayor = num1;
            } else if (num2 >= num1 && num2 >= num3) {
            mayor = num2;
            } else {
            mayor = num3;
            }   

            console.log(`El número mayor es: ${mayor}`);
            break;
            case 2: valor = true; break;
        }
    }


