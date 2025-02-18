//Alquiler de lavadoras//
let tipoLavadora = 1;
let cantidad = 4;
let horas = 5;
let costoPorHora;
if (tipoLavadora === 1) {
    costoPorHora = 4000;
} else {
    costoPorHora = 3000;
}
let costoTotal = cantidad * horas * costoPorHora;
if (cantidad > 3) {
    costoTotal -= costoTotal * 0.03;
}
console.log(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: $${costoTotal}`);