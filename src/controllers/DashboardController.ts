import { IController } from "./IController";
import { Router } from "../Router";

export class DashboardController implements IController {

    private router: Router;

    public constructor(router: Router) {
        this.router = router;
    }


    createView(): HTMLDivElement {
        const container = document.createElement('div');
        container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'



        return container;
    }

}