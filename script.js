const nifInput = document.getElementById('nifInput');
const btnAceder = document.getElementById('btnAceder');
const msgErro = document.getElementById('msgErro');

nifInput.addEventListener('input', function() {
    const valor = nifInput.value;
    const nifNumerico = parseInt(valor);
    
    // Reset padrão
    btnAceder.disabled = true;
    btnAceder.style.backgroundColor = "#555";
    btnAceder.style.color = "white";
    msgErro.innerText = "";
    nifInput.className = 'nif-normal';

    // 1. Se detetar LETRAS -> FICA AMARELO
    if (/[^0-9]/.test(valor)) {
        nifInput.className = 'nif-error'; // Esta classe deve ser amarela no CSS
        msgErro.innerText = "Apenas números são permitidos!";
        msgErro.style.color = "#f1c40f"; // Amarelo
        return;
    }

    // 2. Se tiver 9 NÚMEROS -> FICA VERDE
    if (valor.length === 9) {
        if (nifNumerico >= 111111111 && nifNumerico <= 999999999) {
            nifInput.className = 'nif-valid'; // Esta classe deve ser verde no CSS
            btnAceder.disabled = false;
            btnAceder.style.backgroundColor = "#2ecc71"; // Botão Verde
            msgErro.innerText = "NIF Válido! Pode ver as T-shirts.";
            msgErro.style.color = "#2ecc71"; // Texto Verde
        } else {
            msgErro.innerText = "NIF Inválido.";
            msgErro.style.color = "#e31b23";
        }
    }
});

btnAceder.addEventListener('click', function() {
    window.location.href = 'tshirts.html';
});