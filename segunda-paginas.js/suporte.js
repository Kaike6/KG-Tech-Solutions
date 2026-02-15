document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU MOBILE ================= */
  const btnMenu = document.querySelector("#btnMenu");
  const menu = document.querySelector("#menu");

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });



    /* ================= GERADOR DE PROTOCOLO ================= */
    const protocoloSpan = document.getElementById("numeroProtocolo");

    function gerarProtocolo() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    if (protocoloSpan) {
        protocoloSpan.textContent = `#${gerarProtocolo()}`;
    }

    /* ================= FORMULÁRIO ================= */
    const form = document.getElementById("formulario");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    if (form) {

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let valido = true;

            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const telefone = document.getElementById("telefone");
            const categoria = document.getElementById("categoria");
            const mensagem = document.getElementById("mensagem");
            const btnEnviar = document.getElementById("btn-enviar");

            function mostrarErro(input, mensagemErro) {
                const erroDiv = input.parentElement.querySelector(".erro");
                if (erroDiv) {
                    erroDiv.textContent = mensagemErro;
                }
                input.classList.add("erro-input");
                valido = false;
            }

            function limparErros() {
                document.querySelectorAll(".erro")
                    .forEach(e => e.textContent = "");

                document.querySelectorAll("input, select, textarea")
                    .forEach(e => e.classList.remove("erro-input"));
            }

            limparErros();

            /* ===== VALIDAÇÕES ===== */

            if (!nome.value.trim()) {
                mostrarErro(nome, "O nome é obrigatório.");
            }

            if (!email.value.trim()) {
                mostrarErro(email, "O e-mail é obrigatório.");
            } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
                mostrarErro(email, "Digite um e-mail válido.");
            }

            if (!telefone.value.trim()) {
                mostrarErro(telefone, "O telefone é obrigatório.");
            }

            if (!categoria.value) {
                mostrarErro(categoria, "Selecione uma categoria.");
            }

            if (!mensagem.value.trim()) {
                mostrarErro(mensagem, "Descreva o problema.");
            }

            /* ===== SE TUDO OK ===== */
            if (valido) {

                btnEnviar.innerText = "Enviando...";
                btnEnviar.disabled = true;

                setTimeout(() => {

                    if (mensagemSucesso && protocoloSpan) {
                        mensagemSucesso.textContent =
                            `Chamado enviado com sucesso! Protocolo ${protocoloSpan.textContent}`;
                    }

                    form.reset();

                    btnEnviar.innerText = "Enviar Chamado";
                    btnEnviar.disabled = false;

                    // Novo protocolo
                    if (protocoloSpan) {
                        protocoloSpan.textContent = `#${gerarProtocolo()}`;
                    }

                    // Remove mensagem depois de 4 segundos
                    setTimeout(() => {
                        if (mensagemSucesso) {
                            mensagemSucesso.textContent = "";
                        }
                    }, 4000);

                }, 1500);
            }
        });
    }

    /* ================= MÁSCARA TELEFONE ================= */
    const inputTelefone = document.getElementById("telefone");

    if (inputTelefone) {
        inputTelefone.addEventListener("input", (e) => {

            let x = e.target.value
                .replace(/\D/g, "")
                .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

            e.target.value = !x[2]
                ? x[1]
                : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
        });
    }

});
