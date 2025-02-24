//Calcular el rendimiento academico de un estudiante//
let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n 1 Ingresar del rendimiento academico de un estudiante \n 2 salir"));
    switch (opcion){
        case 1 :
            let fisica = 7;
            let quimica = 5;
            let biologia = 8;
            let matematicas = 9;
            let informatica = 6;
            
            let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
            let porcentaje = (sumaCalificaciones / 50) * 100;
            let calificacion;
            if (porcentaje >= 0 && porcentaje < 60) {
            calificacion = "Mala";
            } else if (porcentaje >= 80 && porcentaje <= 90) {
            calificacion = "Buena";
            } else {
            calificacion = "Excelente";
        }
        console.log(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);

            break;
            case 2: valor = true; break;
        }
    }
    

