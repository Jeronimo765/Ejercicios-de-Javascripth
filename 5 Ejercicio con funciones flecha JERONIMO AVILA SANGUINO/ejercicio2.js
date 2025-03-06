// Ejercicio parecido al del numero primo

const esPositivo = num => {
    if (num < 0) {
        return "El número debe ser positivo.";
    }

    if (num === 0) {
        return 1;
    }

    let positivo = 1; 

    for (let i = 1; i <= num; i++) {
        positivo *= i;
        console.log(`Paso ${i}: Multiplicando ${positivo / i} × ${i} = ${positivo}`);
    }

    return positivo;
};


console.log("Resultado final:", esPositivo(2));
console.log("Resultado final:", esPositivo(3));
console.log("Resultado final:", esPositivo(4));
