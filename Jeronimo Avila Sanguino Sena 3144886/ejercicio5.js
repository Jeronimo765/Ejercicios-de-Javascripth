//Numero mayor entre 3 numeros ingresados por el usuario//
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
