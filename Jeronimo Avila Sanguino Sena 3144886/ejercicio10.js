//Resolucion de problemas de una computadora//
let emitePitido = true;  
let discoDuroGira = true; 

if (emitePitido && discoDuroGira) {
    console.log("Póngase en contacto con el técnico de apoyo.");
} else if (emitePitido && !discoDuroGira) {
    console.log("Verificar contactos de la unidad.");
} else if (!emitePitido && !discoDuroGira) {
    console.log("Traiga la computadora para repararla en la central.");
} else if (!emitePitido && discoDuroGira) {
    console.log("Compruebe las conexiones de altavoces.");
}
