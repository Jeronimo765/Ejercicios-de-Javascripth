
const puntajes = [85, 92, 78, 95, 88];
const mapaPuntajes = new Map (puntajes.map((puntajes, indice) => [indice, puntajes]));
mapaPuntajes.set(5, 90);
console.log(mapaPuntajes);