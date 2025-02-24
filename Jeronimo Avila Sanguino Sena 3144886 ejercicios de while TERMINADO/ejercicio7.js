//Mensualidad de un gimnasio//
let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n  digite la mensualidad que desea pagar en el gimnasio \n 2 salir"));
    switch (opcion){
        case 1 :
            let dias = 90;
            let costo;
            if (dias === 15){
                costo = 18000;
            }else if (dias === 30){
                costo = 35000;
            }else if (dias === 90){
                costo = 86000;
            }else{
                costo = "opcion ivalida";
            }
            console.log(`El costo de la mensualidad para ${dias} dias es: ${costo}`)
            break;
            case 2: valor = true; break;
        }
    }
    