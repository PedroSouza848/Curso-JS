var hora = 14
function carregar() {
    var txtm = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora < 6){
        img.src = 'Bommadruga.jpg'
        document.body.style.background = '#1d233f'
    }else if(hora < 12){
        img.src = 'Bomdia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora < 18){
        img.src = 'Boatarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'Boanoite.jpg'
        document.body.style.background = '#515154'
    }
}

/*if (hora < 6){
    txtm.innerHTML = (`Boa madrugada! Agora são ${hora} horas`)
}else if(hora < 12){
    txtm.innerHTML = (`Bom dia! Agora são ${hora} horas`)
    image.innerHTML = src="Boatarde.jpg"
}else if(hora < 18){
    txtm.innerHTML = (`Boa tarde! Agora são ${hora} horas`)
}else{
    txtm.innerHTML = (`Boa noite! Agora são ${hora} horas`)
}*/