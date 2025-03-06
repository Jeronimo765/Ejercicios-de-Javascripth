let valor = true; // Se mantiene en true para que el ciclo se ejecute

do {
    let opcion = Number(prompt("Ingrese, seleccione: \n1. Seleccione los ingredientes adicionales que quiere en su pedido o cómo quiere su sándwich \n2. Salir"));

    switch (opcion) {
        case 1:
            function calcularPrecio(tamaño, tocineta, jalapeño, pavo, queso) {
                let precioBase = tamaño === "grande" ? 12000 : 6000;
                let precioTocineta = tocineta ? 3000 : 0;
                let precioPavo = pavo ? 3000 : 0;
                let precioQueso = queso ? 2500 : 0;
                return precioBase + precioTocineta + precioPavo + precioQueso;
            }

            function mostrarDetallesPedido(tamaño, tocineta, jalapeño, pavo, queso, total) {
                console.log("Tamaño del sándwich: " + tamaño);
                console.log("Ingredientes adicionales:");
                if (tocineta) console.log("- Tocineta (+$3000)");
                if (jalapeño) console.log("- Jalapeño (Gratis)");
                if (pavo) console.log("- Pavo (+$3000)");
                if (queso) console.log("- Queso (+$2500)");
                console.log("Total a pagar: $" + total);
            }

            let tamaño = prompt("Ingrese el tamaño del sándwich (pequeño/grande):").toLowerCase();
            let tocineta = confirm("¿Desea agregar tocineta? (+$3000)");
            let jalapeño = confirm("¿Desea agregar jalapeño? (Gratis)");
            let pavo = confirm("¿Desea agregar pavo? (+$3000)");
            let queso = confirm("¿Desea agregar queso? (+$2500)");

            let totalPagar = calcularPrecio(tamaño, tocineta, jalapeño, pavo, queso);
            mostrarDetallesPedido(tamaño, tocineta, jalapeño, pavo, queso, totalPagar);
            break;

        case 2:
            valor = false; // Termina el ciclo
            console.log("Gracias por su pedido. ¡Vuelva pronto!");
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
            break;
    }
} while (valor);
