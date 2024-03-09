import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            // Logowanie
            login(profile).then(() => {
                // Przekierowanie po zalogowaniu
                window.location.href = "/posts/index.html";
            }).catch(error => {
                // Obsługa błędu logowania
                console.error("Błąd logowania:", error);
            });
        });
    }
}