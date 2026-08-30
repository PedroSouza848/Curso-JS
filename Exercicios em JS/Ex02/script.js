function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'criancam.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemm.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'meiaidadem.jpg')
            }else {
                img.setAttribute('src', 'velho.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'criancaf.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemf.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'meiaidadef.jpg')
            }else {
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}