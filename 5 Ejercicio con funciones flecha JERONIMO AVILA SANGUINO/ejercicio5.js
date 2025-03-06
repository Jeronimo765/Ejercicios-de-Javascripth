// Ejericiio parecido al de invertir cadena

const invertirNumero = num => 
    parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(invertirNumero(12345));   
console.log(invertirNumero(-9876));   
console.log(invertirNumero(1000));    
console.log(invertirNumero(0));       
