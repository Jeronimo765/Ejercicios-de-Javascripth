//3 angulos que sumados den 180 grados//
let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n 1 Digite 3 angulos que sumados den 180 grados \n 2 salir"));
    switch (opcion){
        case 1 :
        let angulo1 = 60;
        let angulo2 = 60;
        let angulo3 = 60;
        let suma = angulo1 + angulo2 +angulo3;
        if(suma === 180){
            console.log("El triangulo es valido ");
        }else{
            console.log("El triangulo no es valido")
        }
        break;
            case 2: valor = true; break;
        }
    }
    