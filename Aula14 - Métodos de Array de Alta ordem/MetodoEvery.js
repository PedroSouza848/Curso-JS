const lista01 = [0, 2, 4, 6, 8, 10];
const lista02 = [0, 3, 6, 8, 9, 1,];

const pares = lista01.every(numeros => numeros%2 == 0);
const mistos = lista02.every(numeros => numeros%2 == 0);

const umpar = lista01.some(numeros => numeros%2 == 0);
const doispar = lista02.some(numeros => numeros%2 ==0);

console.log("Lista 01: ", lista01);
console.log("Todos os números da lista 01 são pares? :",pares);
console.log("Algum numero da lista 01 é par? :",umpar);

console.log("Lista 02:", lista02);
console.log("Todos os numeros da lista 02 são pares? :", mistos);
console.log("Algum numero da lista 02 é par? :", doispar);
