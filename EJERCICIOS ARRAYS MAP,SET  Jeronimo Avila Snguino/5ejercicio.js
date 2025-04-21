
const productosVendidos = new Set([1001, 1002, 1003]);

const verificarProducto = (set, codigo) => set.has(codigo);

console.log(verificarProducto(productosVendidos, 1002)); 
console.log(verificarProducto(productosVendidos, 1004)); 