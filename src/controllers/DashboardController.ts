import { BaseController } from "./BaseController";

export class DashboardController extends BaseController {

    createView(): HTMLDivElement {
        const container = document.createElement('div');
        container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'
        return container;
    }

}