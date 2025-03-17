
let habitaciones = [0,0,0,0,0];
const mostrarEstado = () => {
    let estado = "Estado de habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++){
        estado += `Habitacion ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
    }
    alert(estado);
};
const reservaHabitacion = (num) => {
    if (num <1 || num > 5) {
        alert("Numero de habitacion invalido. Usa 1-5");
    } else if (habitaciones[num - 1] === 1) {
        alert("Habitacion ya ocupada");
    } else {
        habitaciones[num - 1] = 1;
        alert(`Habitacion ${num} reservada con exito`);
    }
};
const liberarHabitacion = (num) => {
    if (num < 1 || num > 5) {
        alert("Numero de habitacion invvalido. Usa 1-5");
    }else if (habitaciones[num - 1] === 0) {
        alert("Esta habitacion ya esta libre");
    }else {
        habitaciones[num - 1] = 0;
        alert(`Habitacion ${num} liberada con exito`)
    }
};

while (true) {
    let opcion = prompt("1. Ver estado\n2. Rservar\n3. Liberar\n4 Salir\n Elige una opcion");
    if (opcion === "1"){
        mostrarEstado();
    } else if (opcion === "2") {
        let num = parseInt(prompt("Ingresa el numero de habitacion (1-5):"));
        reservaHabitacion(num);
    } else if (opcion === "3") {
        let num = parseInt(prompt("Ingresa el numero de habitacion (1-5):"))
        liberarHabitacion(num);
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    }else {
        alert("Opcion invalida");
    }
}

