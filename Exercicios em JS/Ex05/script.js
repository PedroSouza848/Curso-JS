function adicionar(){
    let num = document.querySelector('input#num')
    var numero = Number(num.value)
    let lista = []

    res = document.querySelector('select#mens')
    dados = document.querySelector('div#dados')

    if(numero.valueOf.length == 0 ){
        window.alert('[ERRO] Nenhum numero adicionado!')
    }else if (numero > 0 && numero <= 100){
        
        let item = document.createElement('option')
        item.text = `Número ${numero} adicionado!`
        res.appendChild(item)
    }else{
        window.alert('[ERRO] Número inválido!')
    }
    lista.push(numero)
    dados.innerHTML += `${lista}`
}
    

function finalizar(){
    window.alert('Deu certo!')
}