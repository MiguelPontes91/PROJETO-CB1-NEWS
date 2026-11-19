
const botao = document.getElementById("botaoAcessibilidade");
const painel = document.getElementById("painelAcessibilidade");

const aumentar = document.getElementById("aumentarTexto");
const diminuir = document.getElementById("diminuirTexto");
const contraste = document.getElementById("alternarContraste");
const daltonismo = document.getElementById("alternarDaltonismo");
const restaurar = document.getElementById("restaurarAcessibilidade");

if (botao && painel && aumentar && diminuir && contraste && daltonismo && restaurar) {

    let tamanhoTexto = 0;

    // Abre e fecha o painel
    botao.addEventListener("click", () => {
        painel.hidden = !painel.hidden;
        botao.setAttribute("aria-expanded", !painel.hidden);
    });

    // Ajusta o tamanho do texto
    function ajustarTexto(valor) {
        tamanhoTexto = Math.max(-2, Math.min(4, tamanhoTexto + valor));

        const elementos = document.querySelectorAll(
            "p, li, h1, h2, h3, a, span"
        );

        elementos.forEach(elemento => {
            if (!elemento.dataset.tamanhoOriginal) {
                elemento.dataset.tamanhoOriginal =
                    parseFloat(getComputedStyle(elemento).fontSize);
            }

            const original = parseFloat(elemento.dataset.tamanhoOriginal);

            elemento.style.fontSize =
                (original + tamanhoTexto * 2) + "px";
        });
    }

    aumentar.addEventListener("click", () => ajustarTexto(1));
    diminuir.addEventListener("click", () => ajustarTexto(-1));

    // Atualiza os nomes dos botões
    function atualizarBotoes() {
        contraste.textContent =
            document.body.classList.contains("alto-contraste")
                ? "Desativar alto contraste"
                : "Ativar alto contraste";

        daltonismo.textContent =
            document.body.classList.contains("modo-daltonismo")
                ? "Desativar modo para daltonismo"
                : "Ativar modo para daltonismo";
    }

    // Ativa ou desativa o alto contraste
    contraste.addEventListener("click", () => {
        const ativar = !document.body.classList.contains("alto-contraste");

        document.body.classList.remove("modo-daltonismo");
        document.body.classList.toggle("alto-contraste", ativar);

        atualizarBotoes();
    });

    // Ativa ou desativa o modo para daltonismo
    daltonismo.addEventListener("click", () => {
        const ativar = !document.body.classList.contains("modo-daltonismo");

        document.body.classList.remove("alto-contraste");
        document.body.classList.toggle("modo-daltonismo", ativar);

        atualizarBotoes();
    });

    // Restaura as configurações originais
    restaurar.addEventListener("click", () => {
        tamanhoTexto = 0;

        document.querySelectorAll("[data-tamanho-original]").forEach(elemento => {
            elemento.style.removeProperty("font-size");
            delete elemento.dataset.tamanhoOriginal;
        });

        document.body.classList.remove(
            "alto-contraste",
            "modo-daltonismo"
        );

        atualizarBotoes();
    });

    atualizarBotoes();
}
