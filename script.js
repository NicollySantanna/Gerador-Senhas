let slider = document.querySelector("#slider");
let btn = document.querySelector("#btn-gerar");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*";
let novaSenha = "";

sizepassword.innerHTML = slider.value;

slider.oninput = function () { //função para aparecer a quantidade de caracter no slide
    sizepassword.innerHTML = this.value
}

function gerarSenha () {
    
let pass = ""

for (let i = 0, n = charset.length; i< slider.value; ++i){ //Laço para gerar a senha aleatória
    pass+= charset.charAt(Math.floor(Math.random () * n));
}
containerPassword.classList.remove("hide") //Remove o hide para o container aparecer
password.innerHTML = pass;
novaSenha = pass;
}

function copypassword() { //Função para copiar a senha gerada
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);

}
