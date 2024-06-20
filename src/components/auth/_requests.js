import {LOGIN_URL, REGISTER_URL} from "../common/apiUrl";
import {apiPost} from "../common/apiService";

export function login(username, password) {
    return apiPost(LOGIN_URL, {
        username,
        password,
    })
}

export function register(
    email,
    firstname,
    lastname,
    password,
    password_confirmation
) {
    return apiPost(REGISTER_URL, {
        email,
        first_name: firstname,
        last_name: lastname,
        password,
        password_confirmation,
    })
}
