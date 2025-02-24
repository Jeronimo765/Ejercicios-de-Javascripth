//Impresion en una fotocopiadora//
let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n 1 Digite la cantidad de copias que quiere adquirir \n 2 salir"));
    switch (opcion){
        case 1 :
        let copias = 600;
        let precioPorCopia;
        let precioTotal;
        if (copias >= 0 && copias <= 499){
            precioPorCopia = 120;
        }else if (copias >= 500 && copias <=749){
            precioPorCopia = 100;
        }else if (copias >= 750 && copias <= 999){
            precioPorCopia = 80;
        }else if (copias >= 1000){
            precioPorCopia = 50;
        }else {
            console.log("Cantidad invalida de copias");
        }
        precioTotal = copias * precioPorCopia;

        console.log(`Precio por copia: $${precioPorCopia}`);
        console.log(`Precio total: $${precioTotal}`);
        break;
        case 2: valor = true; break;
    }
}
