//Modelo de un vehiculo//
let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n 1 Seleccione el modelo de su vehiculo \n 2 salir"));
    switch (opcion){
        case 1 :
        let numeroModelo = 780;
        let modelosDeFectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
        if (modelosDeFectuosos.includes(numeroModelo)){
            console.log("El automovil esta defectuoso, llevar a garantia");
        }else{
            console.log ("Su automovil no esta defectuoso");
        }
        break;
        case 2: valor = true; break;
    }
}