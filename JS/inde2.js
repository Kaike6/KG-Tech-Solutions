  const btnMenu = document.querySelector("#btnMenu");
  const menu = document.querySelector("#menu");

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });



const formulario = document.getElementById("formulario")
const btnEnviar = document.getElementById("btn-enviar")

const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")
const inputTelefone = document.getElementById("telefone")


// ===== BLOCONotas =====
const blocoNotas = document.getElementById("blocoNotas")
const btnDuvida = document.getElementById("duvidas")
const btnVoltar = document.getElementById("voltar")

btnDuvida.addEventListener("click", () => {
  blocoNotas.style.display = "block"
  formulario.style.display = "none"
})

btnVoltar.addEventListener("click", () => {
  blocoNotas.style.display = "none"
  formulario.style.display = "block"
})

const blocoNota = document.getElementById("blocoNota")
const btnEnviar2 = document.getElementById("Enviar2")
const erro = document.getElementById("erro")
const textarea = document.querySelector("#blocoNotas textarea")

btnEnviar2.addEventListener("click", () => {
  erro.textContent = "";
  blocoNota.textContent = "";

  if (textarea.value.trim() === "") {
    erro.textContent = "Digite usua duvida ❌";
    return;
  }
  blocoNota.textContent = "Enviado ✅";
  textarea.value = "";

  setTimeout(() => {
    blocoNota.textContent = "";
  }, 2000);
});


const cadastrado = document.getElementById("cadastrado")
const msg = document.getElementById("msg")
const msg1 = document.getElementById("msg1")
const msg2 = document.getElementById("msg2")
const msg3 = document.getElementById("msg3")

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault()

  // Limpa mensagens
  cadastrado.textContent = ""
  msg.textContent = ""
  msg1.textContent = ""
  msg2.textContent = ""
  msg3.textContent = ""

  // Campos vazios
  if (
    inputNome.value === "" ||
    inputEmail.value === "" ||
    inputSenha.value === "" ||
    inputTelefone.value === ""
  ) {
    msg.textContent = "Preencha todos os campo"
    return
  }

  // Email inválido
  if (!inputEmail.value.includes("@")) {
    msg1.textContent = "E-mail inválido"
    return
  }

  // Senha
  if (inputSenha.value.length < 6) {
    msg2.textContent = "A senha deve ter no mínimo 6 caracteres"
    return
  }

  // Telefone
  if (inputTelefone.value.length >= 10) {
    msg3.textContent = "numero deve ter no mínimo 10 números"
    return
  }

  // ✅ Sucesso
  cadastrado.textContent = `Cadastro feito com sucesso!
  Nome: ${inputNome.value}
  Email: ${inputEmail.value}
  senha: ${inputSenha.value}
  Telefone: ${inputTelefone.value}`

  // 🧹 Limpa o formulário
  formulario.reset()

  setTimeout(() => {
    cadastrado.textContent = ""
  }, 2000)
})

const elementos = document.querySelectorAll(".reveal");

function revelar() {
  const alturaTela = window.innerHeight;

  elementos.forEach((elemento) => {
    const distanciaTopo = elemento.getBoundingClientRect().top;

    if (distanciaTopo < alturaTela - 100) {
      elemento.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", revelar);
window.addEventListener("load", revelar);
