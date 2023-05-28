var menu_bar = document.getElementById('menu-bar');

menu_bar.onclick = function (){
    const sub_lista = document.querySelector(".listas");
    // adicionando class "seta-container no icone seta"

    menu_bar.classList.toggle('ativa');

    if(menu_bar.classList.contains('ativa')){
        sub_lista.classList.add('oi')
    }else{
        sub_lista.classList.remove('oi')
    }
}

//função de click nas setas primarias 

const setaPrimaria = document.getElementsByClassName("pm")[0]

setaPrimaria.addEventListener('click', function(){
    setaPrimaria.classList.toggle('ativo')

    const conteudoPrimario = document.querySelectorAll('.drop-content')[0]
    conteudoPrimario.classList.toggle('conteudo-primario')
    
})

const setaPrimaria2 = document.getElementsByClassName("pm")[1]
setaPrimaria2.addEventListener('click', function(){
    setaPrimaria2.classList.toggle('ativo')

    let conteudoPrimario = document.querySelectorAll('.drop-content')[1]
    conteudoPrimario.classList.toggle('conteudo-primario')
    
})

const setaPrimaria3 = document.getElementsByClassName("pm")[2]
setaPrimaria3.addEventListener('click', function(){
    setaPrimaria3.classList.toggle('ativo')

    let conteudoPrimario = document.querySelectorAll('.drop-content')[2]
    conteudoPrimario.classList.toggle('conteudo-primario')
    
})








// crindo função para cada item da lista que tiver conteudo
// para mostrar depois de clicar na seta 

var seta1 = document.getElementsByClassName('mb')[1]
seta1.addEventListener('click', (cliclou)=>{

    seta1.classList.toggle('ativo')

    var setaContainer = document.querySelectorAll('.sub-container')[0]
    setaContainer.classList.toggle('ativo')
})


var seta2 = document.getElementsByClassName('mb')[2]
seta2.addEventListener('click', (cliclou)=>{

    seta2.classList.toggle('ativo')
    var setaContainer = document.querySelectorAll('.sub-container')[1]
    setaContainer.classList.toggle('ativo')
})

var seta3 = document.getElementsByClassName('mb')[3]
seta3.addEventListener('click', (cliclou)=>{

    seta3.classList.toggle('ativo')
    var setaContainer = document.querySelectorAll('.sub-container')[2]
    setaContainer.classList.toggle('ativo')
}) 

var seta4 = document.getElementsByClassName('mb')[5]
seta4.addEventListener('click', (clicou)=>{

    seta4.classList.toggle('ativo')
    var setaContainer = document.getElementsByClassName("sub-container")[3]
    setaContainer.classList.toggle('ativo')
})

var seta5 = document.getElementsByClassName('mb')[6]
seta5.addEventListener('click', (clicou)=>{

    seta5.classList.toggle('ativo')
    var setaContainer = document.getElementsByClassName("sub-container")[4]
    setaContainer.classList.toggle('ativo')
})
var seta6 = document.getElementsByClassName('mb')[7]
seta6.addEventListener('click', (clicou)=>{

    seta6.classList.toggle('ativo')
    var setaContainer = document.getElementsByClassName("sub-container")[5]
    setaContainer.classList.toggle('ativo')
})
var seta7 = document.getElementsByClassName('mb')[9]
seta7.addEventListener('click', (clicou)=>{

    seta7.classList.toggle('ativo')
    var setaContainer = document.getElementsByClassName("sub-container")[6]
    setaContainer.classList.toggle('ativo')
})
var seta8 = document.getElementsByClassName('mb')[10]
seta8.addEventListener('click', (clicou)=>{

    seta8.classList.toggle('ativo')
    var setaContainer = document.getElementsByClassName("sub-container")[7]
    setaContainer.classList.toggle('ativo')
})