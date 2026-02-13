const btn = document.getElementById("btn-solicitar")
const formulario = document.getElementById("formulario")

const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTel = document.getElementById("tel")
const tipoServico = document.getElementById("tipoServico")
const descricao = document.getElementById("descricao")
const prazo = document.getElementById("prazo")


const cadastrado = document.getElementById("cadastrado")
const msg1 = document.getElementById("msg1")
const msg2 = document.getElementById("msg2")
const msg3 = document.getElementById("msg3")
const msg4 = document.getElementById("msg4")
const msg5 = document.getElementById("msg5")
const msg6 = document.getElementById("msg6")
const erro = document.getElementById("erro")


btn.addEventListener("click", (e) => {
  e.preventDefault()

  // limpa mensagens
  cadastrado.textContent = ""
  msg1.textContent = ""
  msg2.textContent = ""
  msg3.textContent = ""
  msg4.textContent = ""
  msg5.textContent = ""
  msg6.textContent = ""
  erro.textContent = ""

  if(inputNome.value === "" ||
    inputEmail.value === "" ||
    inputTel.value === "" ||
    tipoServico.value === "" ||
    descricao.value === "" ||
    prazo.value === ""
    ) {
    erro.textContent = "Preencha todos os campo"
    return
    }

  if (inputNome.value === "") {
    msg1.textContent = "Preencha o nome"
    return
  }
  if (!inputEmail.value.includes("@")) {
    msg2.textContent = "E-mail inválido"
    return
  }
  if (inputTel.value.length !== 11) {
    msg3.textContent = "Só pode 11 caracteres"
    return
  }

  // SUCESSO
  cadastrado.textContent = `projeto enviado com sucesso!
    ${inputNome.value}`

  formulario.reset()

  setTimeout(() => {
    cadastrado.textContent = ""
  }, 2000)
})
