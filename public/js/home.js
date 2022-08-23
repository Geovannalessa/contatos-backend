// Criando constantes para login
const emailEsperado = "ursinhodemydesk@gmail.com";
const senhaEsperado = "123"

const form = document.getElementById("form");

// Capturar todos os elementos de interesse na página
// 1 - Input do email
const inputEmail = document.querySelector("#form input[type=email]");
// 2 - Input da senha
const inputSenha = document.querySelector("#form input[type=password]");

// 3 - Botão de entrar
const buttonEntrar = document.querySelector("#form button[type=submit]");

buttonEntrar.innerHTML += "vaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai"

// Associar o evento "perder o foco" com um função que verifica se o campo
// foi preenchido
inputEmail.addEventListener(
    "mouseover",
    ()=>{
        console.log("mousando")
    }
)
buttonEntrar.addEventListener(
    "click",
    ()=>{
        if(click==3){
            console.log("amado")
        }
    }
)