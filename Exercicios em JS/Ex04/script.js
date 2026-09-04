function tabuada(){
    var valor = document.querySelector('input#num')
    var num = Number(valor.value)
    var res = document.getElementById('mens')
    res.innerHTML = ''

    for(c = 0; c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c} `
        res.appendChild(item)
        item.value = `tab${c}`
    }    
}