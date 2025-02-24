let valor =  false
while(valor != true){
    let opcion = Number (prompt("Ingrese, seleccione: \n 1 Seleccione los ingredientes adicionales que quiere tener su pedidio o como quiere su sandwich \n 2 salir"));
    switch (opcion){
        case 1 :
        let tamaño = "grande"; 
        let tocineta = true; 
        let jalapeño = true; 
        let pavo = false; 
        let queso = true; 
        let precioBase = tamaño === "grande" ? 12000 : 6000;
        let precioTocineta = tocineta ? 3000 : 0;
        let precioPavo = pavo ? 3000 : 0;
        let precioQueso = queso ? 2500 : 0;
        let totalPagar = precioBase + precioTocineta + precioPavo + precioQueso;
        console.log("Tamaño del sándwich: " + tamaño);
        console.log("Ingredientes adicionales:");
        if (tocineta) console.log("- Tocineta (+$3000)");
        if (jalapeño) console.log("- Jalapeño (Gratis)");
        if (pavo) console.log("- Pavo (+$3000)");
        if (queso) console.log("- Queso (+$2500)");
        console.log("Total a pagar: $" + totalPagar);
        break;
        case 2: valor = true; break;
    }
}
    
    
