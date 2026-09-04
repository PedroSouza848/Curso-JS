function contar(){
    var numi = window.document.querySelector('input#numi')
    var numf = window.document.querySelector('input#numf')
    var pas = document.querySelector('input#pas')
    var res = document.querySelector('div#res')

    if (numi.value.length ==  0 || numf.value.length == 0 || pas.value.length == 0){
        window.alert(`[ERRO] Um dos campos está vazio`)
    }else{
        res.innerHTML = 'Contando: <br>'
        var num1 = Number(numi.value)
        var num2 = Number(numf.value)
        var passo = Number(pas.value)

        if (passo <= 0){    //Caso o passo seja definido como 0 ou menor
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }

        if (num1 < num2){   //Contagem crescente
            while (num1 < num2){
            res.innerHTML += ` ${num1} &#x1F449;`
            num1 = num1 + passo  
            } 
        }else{              //Contagem decrescente
            while (num1 >= num2){
                res.innerHTML += ` ${num1} &#x1F449;`
                num1 = num1 - passo
            }
        }
    
    res.innerHTML += `&#x1F3C1`
    }
    /*Código do emoji para HTML: &#x1F449;*/ 
}