import { Router } from "../Router";
import { IController } from "./IController";

export class MainViewController implements IController {

    private someText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    public constructor(private router: Router) { }

    public createView(): HTMLDivElement {
        const container = document.createElement('div');

        const title = document.createElement('h2');
        title.innerText = 'Welcome to the best page!'

        const article = document.createElement('div');
        article.innerText = this.someText;

        const loginButton = document.createElement('button');
        loginButton.innerText = 'Login';
        loginButton.onclick = () => {
            this.router.switchToLoginView();
        }
        container.append(title, article, loginButton);
        return container;
    }
}