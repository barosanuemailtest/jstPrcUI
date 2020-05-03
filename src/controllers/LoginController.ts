import { Router } from "../Router";
import { IController } from "./IController";
import { LoginService } from "../services/LoginService";
import { SessionToken } from "../models/AuthModels";

export class LoginController implements IController {

    private loginService: LoginService = new LoginService();

    public constructor() { }

    public createView(): HTMLDivElement {
        const container = document.createElement('div');
        container.style.width = '200px';
        const title = document.createElement('h2');
        title.innerText = 'Please login';

        const userNameLabel = document.createElement('label');
        userNameLabel.innerText = 'Username:'

        const userNameInput = document.createElement('input');

        const passwordLabel = document.createElement('label');
        passwordLabel.innerText = 'Password:'

        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';

        const breakz = document.createElement('br');

        const errorLabel = document.createElement('label');
        errorLabel.style.color = 'red'
        errorLabel.style.visibility = 'hidden';

        const loginButton = document.createElement('button');
        loginButton.innerText = 'Login';
        loginButton.onclick = async () => {
            const sessionToken: SessionToken | null = await this.loginService.login(
                userNameInput.value,
                passwordInput.value);
            if (sessionToken) {

            } else {
                errorLabel.innerText = 'wrong username or password!'
                errorLabel.style.visibility = 'visible';
            }
        }



        container.append(title, userNameLabel, userNameInput, passwordLabel, passwordInput, loginButton, breakz, errorLabel);
        return container
    }

}