function Enviar(){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")

    if(nome.value != ""){
            if(email.value.indexOf("@") != -1) {
                alert(nome.value + " iremos analizar sua questão. O nosso suporte entrará em contato logo após a análise.")
        }
        else {
            alert("Digite um email válido")
        }
    }
    else {
        alert("Preencha o seu nome completo por favor")
    }
}

function Entrar() {
    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")

    if (usuario.value != ""){
        if(senha.value != ""){
            alert("Bem Vindo(a) " + usuario.value + "!")
        } else {
            alert("senha inválida")
        }
    } else {
        alert("usuário ou senha incorreta")
    }
}

var quantidade = 0

function adicionarCarrinho(){
   if (quantidade < 9){
        quantidade = quantidade + 1
   } else {
        quantidade = "+9"
    }
    const contadorElement = document.getElementById('contador')
    contadorElement.innerHTML = quantidade
}
