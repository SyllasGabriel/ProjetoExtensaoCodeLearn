function verificarRES() {
const respostaCorreta = 0;

const urlParams = new URLSearchParams(window.location.search);

const respostaRecebida = urlParams.get('resposta');

const elementoResultado = document.getElementById('resultado');

if( respostaRecebida !== null && respostaRecebida === respostaCorreta) {
    elementoResultado.textContent = "✅ CORRETO! A resposta '" + respostaCorreta + "' está certa.";
    elementoResultado.style.color = 'green';
} else {
    elementoResultado.textContent = "❌ ERRADO! Sua resposta foi '" + respostaRecebida + "', mas a correta era '" + respostaCorreta + "'.";
    elementoResultado.style.color = 'red';
}
}