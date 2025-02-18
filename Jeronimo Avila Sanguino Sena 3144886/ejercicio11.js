//Modelo de un vehiculo//
let numeroModelo = 780;
let modelosDeFectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
if (modelosDeFectuosos.includes(numeroModelo)){
    console.log("El automovil esta defectuoso, llevar a garantia");
}else{
    console.log ("Su automovil no esta defectuoso");
}