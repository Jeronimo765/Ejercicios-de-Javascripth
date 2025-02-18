//Ayudas economicas de una alcaldia//
let genero = "femenino"; 
let edad = 60; 
let ayuda;
if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    ayuda = "Dato inválido"; 
}
console.log(`El valor de ayuda mensual es: $${ayuda}`);
