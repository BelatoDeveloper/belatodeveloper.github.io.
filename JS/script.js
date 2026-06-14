document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-contato");

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        limparErros();

        let formularioValido = true;

        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const data = document.getElementById("data-retorno").value;
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value.trim();
        const termos = document.getElementById("termos").checked;
        const radiosArea = document.getElementsByName("area");
        
        let areaSelecionada = false;
        for (let i = 0; i < radiosArea.length; i++) {
            if (radiosArea[i].checked) {
                areaSelecionada = true;
                break;
            }
        }

        if (nome === "") {
            mostrarErro("erro-nome", "Por favor, preencha seu nome.");
            formularioValido = false;
        }

        if (telefone === "") {
            mostrarErro("erro-telefone", "Informe um número de contato.");
            formularioValido = false;
        }

        if (data === "") {
            mostrarErro("erro-data", "Selecione uma data válida.");
            formularioValido = false;
        }

        if (assunto === "") {
            mostrarErro("erro-assunto", "Selecione um assunto.");
            formularioValido = false;
        }

        if (!areaSelecionada) {
            mostrarErro("erro-area", "Selecione sua área de interesse.");
            formularioValido = false;
        }

        if (mensagem === "") {
            mostrarErro("erro-mensagem", "Escreva uma mensagem.");
            formularioValido = false;
        }

        if (!termos) {
            mostrarErro("erro-termos", "Você precisa aceitar os termos.");
            formularioValido = false;
        }

        if (formularioValido) {
            alert("Sucesso! Os dados foram validados corretamente. (Simulação de envio)");
            formulario.reset();
        }
    });

    function mostrarErro(idSpan, textoMensagem) {
        document.getElementById(idSpan).innerText = textoMensagem;
    }

    function limparErros() {
        const spansErro = document.querySelectorAll(".erro");
        for (let i = 0; i < spansErro.length; i++) {
            spansErro[i].innerText = "";
        }
    }
});