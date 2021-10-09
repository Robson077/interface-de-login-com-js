
function continuar(){

    const username = document.getElementById("usuario").value

    const email = document.getElementById("email").value

    const passsword = document.getElementById("password").value

    window.location.href = "segundapagina.html"
    //console.log(username)
    //console.log(email)
    //console.log(passsword)
}

const urlparams = new URLSearchParams(window.location.search)

const paramUsuario = urlparams.get("nome")

const paramEmail = urlparams.get("email")

const paramPassword = urlparams.get("senha")


function revelar(){
    document.getElementById("nome-usuario").innerHTML = paramUsuario

    document.getElementById("email-usuario").innerHTML = paramEmail

    document.getElementById("password-usuario").innerHTML = paramPassword
}

function voltar() {
    window.location.href = "index.html"
}