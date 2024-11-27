document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validar usuario y contraseña (puedes reemplazar esto con validación real)
        if (username === 'admin' && password === '1234') {
            alert('Inicio de sesión exitoso');
            window.location.href = 'dashboard.html'; // Redirigir al menú
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
