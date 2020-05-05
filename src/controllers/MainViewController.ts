import { BaseController } from "./BaseController";

export class MainViewController extends BaseController {

    private someText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    public createView(): HTMLDivElement {
        const title = document.createElement('h2');
        title.innerText = 'Welcome to the best page!'

        const article = this.createDiv();
        article.innerText = this.someText;

        const loginButton = this.createButton(
            'Login',
            () => {
                this.router.switchToLoginView();
            }
        );
        this.container.append(title, article, loginButton);
        return this.container;
    }
}