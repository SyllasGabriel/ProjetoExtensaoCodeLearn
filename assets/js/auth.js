// assets/js/auth.js

// Function to toggle password visibility
function togglePassword() {
    const input = document.getElementById('password');
    const icon = document.querySelector('.toggle-password');
    
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Select the form
const loginForm = document.querySelector('.login-form');

// Add Listener
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        
        // Simple Validation
        if (usernameInput.value.length < 3) {
            alert("O nome de usuário deve ter pelo menos 3 caracteres.");
            return; // Stop execution
        }

        if (passwordInput.value.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return; // Stop execution
        }

        // If valid, save and redirect
        localStorage.setItem('currentUser', usernameInput.value);
        
        // Simulate loading state
        const btn = loginForm.querySelector('.btn-submit');
        const originalText = btn.innerText;
        btn.innerText = "Carregando...";
        btn.style.opacity = "0.7";
        
        setTimeout(() => {
            window.location.href = './dashboard.html';
        }, 1000);
    });
}
