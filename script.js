// Funkcja zmiany tła
function toggleBackground() {
    let currentBackground = document.body.style.backgroundColor;
    if (currentBackground === 'rgb(12, 12, 12)') {
        document.body.style.backgroundColor = '#fff';
    } else {
        document.body.style.backgroundColor = '#0c0c0c';
    }
}

// Funkcja rozpoczęcia gry
function startGame() {
    const username = localStorage.getItem('username');
    if (!username) {
        alert('Zaloguj się, aby rozpocząć grę!');
        window.location.href = 'login.html';
        return;
    }

    alert(`Witaj w grze, ${username}!`);
    // Możesz tu dodać logikę rozpoczęcia gry.
}

// Funkcja logowania
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username === '' || password === '') {
        alert('Wszystkie pola muszą być wypełnione!');
        return;
    }

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert('Zalogowano pomyślnie!');
        localStorage.setItem('loggedIn', true);
        window.location.href = 'index.html';
    } else {
        alert('Błędna nazwa użytkownika lub hasło');
    }
}

// Funkcja rejestracji
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Wszystkie pola muszą być wypełnione!');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Rejestracja zakończona sukcesem!');
    window.location.href = 'login.html';
}

// Funkcja wylogowania
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('loggedIn');
    alert('Wylogowano pomyślnie!');
    window.location.href = 'index.html';
}

// Wyświetlanie nazwy użytkownika po zalogowaniu
window.onload = function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const usernameDisplay = document.getElementById('username-display');
    const userInfoSection = document.getElementById('user-info');

    if (loggedIn) {
        const username = localStorage.getItem('username');
        usernameDisplay.textContent = username;
        userInfoSection.style.display = 'block';
    } else {
        userInfoSection.style.display = 'none';
    }
}
