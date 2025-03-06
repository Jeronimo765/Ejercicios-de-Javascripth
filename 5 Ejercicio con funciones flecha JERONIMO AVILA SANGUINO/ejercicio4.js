// Ejericiio parecido al de una serie Fibonacci

const numeroEntero = (n) => {
    if (n <= 0 || !Number.isInteger(n)) {
        return "Por favor, ingrese un número entero positivo";
    }

    if (n === 1) {
        return "0"; 
    }

    let a = 0, b = 1;
    let resultado = [a, b]; 
    for (let i = 2; i < n; i++) {
        const siguiente = a + b;
        resultado.push(siguiente); 
        a = b;
        b = siguiente;
    }

    return resultado.join(", ");
}

console.log(numeroEntero(8));   
console.log(numeroEntero(2));   
console.log(numeroEntero(1));  
console.log(numeroEntero(-5)); 
console.log(numeroEntero(3.5)); 
