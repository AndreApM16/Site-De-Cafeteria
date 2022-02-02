var user = document.querySelector("input#user")
var pass = document.querySelector("input#pass")
var botao = document.querySelector("button#logar")


function login() {
    if (user.value == "user16" & pass.value == "1616") {
        alert("Login Efetuado com Sucesso");
        window.location.href = "index.html"
    } else {
        alert("Credenciais incorretas");
    }
}

botao.onclick = login;