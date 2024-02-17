import { login } from "../api/auth/login.mjs";


export function setloginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries())

        // we want to send it to the API //
        login(profile)
    })
}
}