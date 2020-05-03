import { Router } from "../Router";
import { IController } from "./IController";

export class LoginController implements IController {

    public constructor(private router: Router) { }

    public createView(): HTMLDivElement {
        console.log('LoginController#createView');
        const container = document.createElement('div');
        container.innerText = 'THIS IS THE LOGIN!!!!!!!!!!!!!'
        return container
    }

}