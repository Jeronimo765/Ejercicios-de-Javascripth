// Ejercicio parecido al de digitos

const sumaNumeros = num => {
    const numString = Math.abs(num).toString(); 

    let suma = 0;

    for (let i = 0; i < numString.length; i++) {
        const digito = parseInt(numString[i]); 
        suma += digito;
    }

    return suma; 
}
console.log(sumaNumeros(126)); 
console.log(sumaNumeros(157)); 
console.log(sumaNumeros(154)); 
console.log(sumaNumeros(-328)); 