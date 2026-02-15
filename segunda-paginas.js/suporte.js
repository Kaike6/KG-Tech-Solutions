const form = document.getElementById("formSuporte");
const mensagemSucesso = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || assunto === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  mensagemSucesso.textContent = "Solicitação enviada com sucesso!";
  form.reset();
});
