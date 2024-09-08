document.addEventListener('DOMContentLoaded', function () {
    const changeThemeBtn = document.querySelector("#change-theme");

    // Toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark");
    }

    // Load the saved theme from localStorage
    function loadTheme() {
        const darkMode = localStorage.getItem("dark");

        // Se o darkMode estiver setado, ativa o dark mode
        if (darkMode) {
            document.body.classList.add("dark");
            changeThemeBtn.checked = true;  // Mantém o checkbox marcado
        }
    }

    loadTheme();  // Carrega o tema salvo ao iniciar

    // Toggle light or dark mode when checkbox is changed
    changeThemeBtn.addEventListener("change", function () {
        toggleDarkMode();

        // Save or remove dark mode from localStorage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("dark", "1");
        } else {
            localStorage.removeItem("dark");
        }
    });
});
