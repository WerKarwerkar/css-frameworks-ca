import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");
    
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            try {
                // Wyślij dane rejestracji do API
                await register(profile);
                
                // Przekieruj użytkownika do strony logowania po pomyślnym zarejestrowaniu
                window.location.href = "/profile/login/index.html";
            } catch (error) {
                console.error("Registration failed:", error);
                // Tutaj możesz obsłużyć ewentualne błędy rejestracji, np. wyświetlić komunikat dla użytkownika
            }
        });
    }
}