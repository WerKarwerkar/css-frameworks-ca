import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register/index.html";
const method = "post";

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
        headers: {
            "content-Type": "application/json"
        },
        method,
        body
    })
    console.log(response)
    const result = await response.json()
    return result
}