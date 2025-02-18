// Programa para calcular el salario de un empleado según las horas trabajadas
let nombre = "Ana López";
let horas = 15;
let tarifa;
if (horas >= 10) {
    tarifa = 30000; 
} else {
    tarifa = 33000; 
}
let salario = horas * tarifa;
console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`);

