import { Router } from "../Router";
import { IController } from "./IController";

export class LoginController implements IController {

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

        const loginButton = document.createElement('button');
        loginButton.innerText = 'Login';
        loginButton.onclick = () => {
        }



        container.append(title, userNameLabel, userNameInput, passwordLabel, passwordInput, loginButton);
        return container
    }

}