import { Router } from "../Router";

export abstract class BaseController {

    protected router: Router
    protected container = this.createDiv();


    constructor(router: Router) {
        this.router = router;
    }
    abstract createView(): HTMLDivElement;

    protected createDiv(): HTMLDivElement {
        return document.createElement('div');
    }

    protected createButton(text: string, buttonAction: any): HTMLButtonElement {
        const button = document.createElement('button');
        button.innerText = text;
        button.onclick = buttonAction;
        return button;
    }
}