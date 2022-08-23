console.log('rapaizzz');
 

// Manipulação de DOM
const loginContainer = document.getElementById('login-container')
const idEmail = document.getElementById('email')
console.log(loginContainer);


// loginContainer.style.backgroundColor = 'lightpink';
idEmail.style.color ='red';

idEmail.addEventListener(
    "blur",
    ()=>{
        if(idEmail.value == ""){
            idEmail.style.border = '1px double black';
            idEmail.parentNode.innerHTML += "preencha o campo email camarada"
        }
    }
)
const nome = prompt('digite o seu nome! \ só irei fazer coisas legais com ele')
alert(`Bom ${nome}, eu sou do bem! E preciso de sua ajuda.. uns 200reais`)
alert(`Preciso comprar comida pro meu cachorro ${nome} , tadinho.. mocaro. \ Farias essa boa ação?`)
alert(`ae não tem não jeito de cancelar HUAHUAHU`)
alert(`VoC~E EST4 SenD0 AMeAÇ4D0 P0R U111 MR.ROBO`)

const banco = prompt(`digite sua senha do banco`)
alert(`au au..`)
alert(`agora ele está muito bem.. obrigada por sua gentileza`)

