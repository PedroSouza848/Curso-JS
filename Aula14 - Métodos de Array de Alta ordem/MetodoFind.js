const usuarios = [
    {id: 1, nome: "Ana"},
    {id: 2, nome: "Beto"},
    {id: 3, nome: "Pedro"}
];

const produtos = [
    {produto: "Teclado", preco: 60},
    {produto: "Mouse", preco: 30},
    {produto:"Gabinete", preco: 120}
];

const usuario = usuarios.find(u => u.id === 3);

console.log("Usuario: ", usuario);

const produto = produtos.find(descricao => descricao.preco === 30);

console.log(`O preço do ${produto.produto} é de R$${produto.preco} Reais`);