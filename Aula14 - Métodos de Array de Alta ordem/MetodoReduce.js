/*const valores = [10, 25, 30, 5];

const total = valores.reduce((acumulador, precoatual) => {
    return acumulador + precoatual;
}, 0);

console.log("Valor Total: ", total);*/
const carrinho = [
    {produto: "Camiseta", preco: 50, quantidade: 2},
    {produto: "Calça", preco: 150, quantidade: 1},
    {produto: "Meia", preco: 15, quantidade: 3}
];

const valortotal = carrinho.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
}, 0);

console.log(`Sua compra deu um total de R$${valortotal} Reais`);