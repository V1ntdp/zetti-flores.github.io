var menu_bar = document.getElementById('menu-bar');

menu_bar.onclick = function oi(){
    const sub_lista = document.querySelector(".listas");
    // adicionando class "seta-container no icone seta"

    menu_bar.classList.toggle('ativa');
    
    if(menu_bar.classList.contains('ativa')){
        sub_lista.classList.add('oi')
    }else{
        sub_lista.classList.remove('oi')
    }

    // if(menu_bar.classList.contains('ativa') || sub_lista.classList.contains('oi')){
}


// secelionando as setas clicada

const setas = document.querySelectorAll(".pm");
// var setas recebendo as classes "pm" do CSS
const conteudos = document.querySelectorAll(".drop-content");
// var conteudos recebendo as classes "drop-content" do CSS

for(let i = 0; i < setas.length ; i++){
// se a var "i" que é 0 for menor que stas.length que são 3, var "i" adicionara +1 até essa condição se tornar falsa.
    setas[i].addEventListener('click', () => myFun(i))
// setas recebendo o parametro que é a variavel que está adicionando +1, fazendo chamem todas as 3 setas.
// está adicionando um evento de click para todas as setas e quando clicado ele ativa a função myFun
// função myFun recebe a var "i" como parametro, para indicar que a cada seta clicada ativara está função.
}

function myFun(ConteudoDeTalSeta){
// função myFun com parametro ConteudoDeTalSeta, isto serve para quando eu clicar em setas, todos os codigos que está dentro desta função e usando um mesmo parametro, sejam referentes as setas clicadas
// funcao interligada com as setas que ativam a função chamando o parametro i
    conteudos[ConteudoDeTalSeta].classList.toggle('conteudo-primario');

    if(conteudos[ConteudoDeTalSeta].classList.contains('conteudo-primario')){
        setas[ConteudoDeTalSeta].classList.add('ativo')
    }else{
        setas[ConteudoDeTalSeta].classList.remove('ativo')
    }
}



// // crindo função para cada item da lista que tiver conteudo
// // para mostrar depois de clicar na seta 


const subSetas = document.querySelectorAll(".sb")
const subContainer = document.querySelectorAll(".sub-container")

for(let e = 0; e < subSetas.length; e++){
    subSetas[e].addEventListener('click', () => subLista(e))
    console.log(subSetas)
}

function subLista(subConteudo){
    subContainer[subConteudo].classList.toggle('ativo');
    if(subContainer[subConteudo].classList.contains('ativo')){
        subSetas[subConteudo].classList.add('ativo')
    }else{
        subSetas[subConteudo].classList.remove('ativo')
    }
    }