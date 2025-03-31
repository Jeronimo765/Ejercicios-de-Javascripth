const hotel = {
    habitaciones: {
        1: "Libre",
        2: "Libre",
        3: "Libre",
        4: "Libre",
        5: "Libre"
    },
    
    mostrarEstado() {
        let estado = "Estado de habitaciones:\n";
        for (let num in this.habitaciones) {
            estado += `Habitación ${num}: ${this.habitaciones[num]}\n`;
        }
        alert(estado);
    },
    
    reservarHabitacion(num) {
        if (!(num in this.habitaciones)) {
            alert("Número de habitación inválido. Usa 1-5");
        } else if (this.habitaciones[num] === "Ocupada") {
            alert("Habitación ya ocupada");
        } else {
            this.habitaciones[num] = "Ocupada";
            alert(`Habitación ${num} reservada con éxito`);
        }
    },
    
    liberarHabitacion(num) {
        if (!(num in this.habitaciones)) {
            alert("Número de habitación inválido. Usa 1-5");
        } else if (this.habitaciones[num] === "Libre") {
            alert("Esta habitación ya está libre");
        } else {
            this.habitaciones[num] = "Libre";
            alert(`Habitación ${num} liberada con éxito`);
        }
    }
};

while (true) {
    let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        hotel.mostrarEstado();
    } else if (opcion === "2") {
        let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
        hotel.reservarHabitacion(num);
    } else if (opcion === "3") {
        let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
        hotel.liberarHabitacion(num);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida");
    }
}
