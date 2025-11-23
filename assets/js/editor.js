// assets/js/editor.js

function runCode() {
    const code = document.getElementById('codeInput').value;
    const terminal = document.getElementById('terminalOutput');
    
    // 1. Clear Terminal
    terminal.innerHTML = '<span class="sys-msg">> Compilando...</span>';
    
    // 2. Simulate Delay for realism
    setTimeout(() => {
        
        // 3. Logic Check (The MVP Algorithm)
        // We check if the user changed "10" to "5" inside the while loop
        const hasCorrectLoop = code.includes('while contador < 5') || code.includes('while contador <= 4');
        
        if (hasCorrectLoop) {
            // --- SUCCESS SCENARIO ---
            terminal.innerHTML += `
                <br>
                <span class="sys-msg">> Executando testes... [OK]</span>
                <span class="sys-msg">> Verificando loop... [OK]</span>
                <br>
                <span class="success-msg">SUCESSO: O sistema parou no contador 5.</span>
                <span class="success-msg">Bug corrigido!</span>
            `;
            
            // Trigger Win Modal
            setTimeout(() => {
                document.getElementById('successModal').classList.add('active');
                // Optional: Add XP to local storage here
                updateXP();
            }, 1500);

        } else {
            // --- FAILURE SCENARIO ---
            terminal.innerHTML += `
                <br>
                <span class="sys-msg">> Executando testes... [FALHA]</span>
                <br>
                <span class="error-msg">ERRO: Loop infinito ou incorreto detectado.</span>
                <span class="sys-msg">Esperado: Parar em 5</span>
                <span class="sys-msg">Encontrado: Loop continua além do limite.</span>
                <br>
                <span class="sys-msg">> Tente ajustar a condição 'while'.</span>
            `;
        }
    }, 800); // 800ms fake delay
}

// Optional: Simulate updating XP in LocalStorage for the Dashboard
function updateXP() {
    let currentXP = parseInt(localStorage.getItem('userXP') || '850');
    localStorage.setItem('userXP', currentXP + 100);
}