let num = [5, 2, 6, 0, 8]
num.push(1)
num.push(9)
num.sort()

console.log(`O vetor tem ${num.length} posições`)
/*for(let pos = 0; pos < num.length; pos++){
    console.log(`Posição numero ${pos}: ${num[pos]}`)
}*/

for( let pos in num){
    console.log(`Posição numero ${pos}: ${num[pos]}`)
}