//Ejericio parecido al del factorial

const calcularSumaPasoAPaso = (num) => {

    if (num < 0) {
        return "El número debe ser positivo.";
    }

    if (num === 0) {
        return 0;
    }

    let suma = 0;

    for (let i = 1; i <= num; i++) {
        suma += i;
        console.log(`Paso ${i}: Sumando ${suma - i} + ${i} = ${suma}`);
    }

    return suma;
};

console.log("Resultado final:", calcularSumaPasoAPaso(5));
