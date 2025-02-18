//Ejercicio parecido para cambio de contraseña en una base de datos//
let nombreUsuario = "Julian";
let direccionIngresada = "mz 22 casa8 barrio el galan";
let emailIngresado = "julian1234@gmail.com";
let claveEmail = "*1234"

if (nombreUsuario == direccionIngresada && emailIngresado == claveEmail){
    console.log(`${nombreUsuario}¡Bienvenbido! ahora usted podra cambiar sus datos y actualizarlos`)
}else{
    console.log(`Algo salio mal acceso denegado...`);
}