
let operador = "Tigo"; 
let minutosInternacional = 10;
let cargoFijo = 0;
let valorMinuto = 0;
let valorPaqueteDatos = 0;
if (operador === "Tigo"){
    cargoFijo = 45000;
    valorMinuto = 45000;
    valorPaqueteDatos = 12000;
}else if (operador === "Claro"){
    cargoFijo = 30000;
    valorMinuto = 100;
    valorPaqueteDatos = 18000;
}else if (operador === "Movistar"){
    cargoFijo = 40000;
    valorMinuto = 250;
    valorPaqueteDatos = 8000;
}else {
    console.log("Operador no valido")
}
let totalPagar = cargoFijo + (valorMinuto * minutosInternacional) + valorPaqueteDatos;
console.log("Operador:" + operador);
console.log("Minutos Internacionales:" + minutosInternacional);
console.log("Total a pagar: $" + totalPagar);