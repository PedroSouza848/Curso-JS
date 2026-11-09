const numeros = [1,2,3,4,5,6,7,8,9,10];
const idades = [10, 15, 36, 22, 18];

const pares = numeros.filter(numeros => numeros%2 == 0);
const impares = numeros.filter(numeros => numeros%2 != 0);

const maiores = idades.filter(idades => idades >= 18);
const menores = idades.filter(idades => idades < 18);

console.log("Numeros: ",numeros);
console.log("Numeros Pares: ",pares);
console.log("Numeros Impares: ",impares);

console.log("Idades: ", idades);
console.log("Maiores de idade: ", maiores);
console.log("Menores de idade: ", menores);