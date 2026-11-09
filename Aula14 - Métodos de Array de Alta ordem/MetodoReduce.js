const valores = [10, 25, 30, 5];

const total = valores.reduce((acumulador, precoatual) => {
    return acumulador + precoatual;
}, 0);

console.log("Valor Total: ", total)