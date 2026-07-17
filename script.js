// Lista de todos os acessórios

const acessorios = [
    "bone",
    "oculos",
    "bigode",
    "barba",
    "coroa",
    "laco",
    "nariz"
];

// Mostra ou esconde um acessório
function toggle(id){

    const item = document.getElementById(id);

    item.classList.toggle("hidden");

}

// Remove todos os acessórios
function resetar(){

    acessorios.forEach(id => {

        document
        .getElementById(id)
        .classList.add("hidden");

    });

}

// Coloca acessórios aleatórios
function visualAleatorio(){

    resetar();

    acessorios.forEach(id=>{

        if(Math.random()>0.5){

            document
            .getElementById(id)
            .classList.remove("hidden");

        }

    });

}

// Atalho de teclado (opcional)
document.addEventListener("keydown",(e)=>{

    if(e.key==="r"){

        resetar();

    }

    if(e.key==="a"){

        visualAleatorio();

    }

});

// Pequena animação ao clicar nos botões
const botoes = document.querySelectorAll("button");

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        botao.style.transform="scale(.92)";

        setTimeout(()=>{

            botao.style.transform="scale(1)";

        },120);

    });

});

// Mensagem de boas-vindas
window.onload=()=>{

    console.log("🎮 Exclusivos do Jair carregado com sucesso!");

};
