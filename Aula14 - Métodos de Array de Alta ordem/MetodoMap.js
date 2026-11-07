const numeros = [1, 2, 3, 4, 5, 6, 7, 8]; //Criamos um array
const nomes = ["ana", "pedro", "lucas"];  //Criamos um com nomes

const numerosDobrados = numeros.map(numeros => numeros * 2); //Usamos o Map para percorrer o Array e executar a função
const nomesMaiusculos = nomes.map(nomes => nomes.toUpperCase());

console.log("Numeros: ",numeros);   //Exibe os numeros
console.log("Numeros Dobrados: ", numerosDobrados); //Exibe os numeros dobrados

console.log("Nomes: ", nomes);      //Exibe os nomes
console.log("Nomes Maiusculos: ", nomesMaiusculos); //Exibe os Nomes em Maiusculo
