import { MainViewController } from "./controllers/MainViewController";
import { LoginController } from "./controllers/LoginController";

export class Router {

    private mainViewController: MainViewController = new MainViewController(this);
    private loginController: LoginController = new LoginController();
    private mainElement = document.getElementById('main-container');

    private getRoute(): string {
        return window.location.pathname;
    }

    public handleRequest() {
        console.log('handling request for: ' + this.getRoute());
        switch (this.getRoute()) {
            case '/login':
                this.setLogin();
                break;
            default:
                if (this.mainElement) {
                    this.mainElement.append(this.mainViewController.createView());
                } else {
                    console.error('main element not found!!!!!')
                }

                break;
        }
    }

    public setLogin() {

        if (this.mainElement) {
            this.mainElement.innerHTML = '';
            this.mainElement.append(this.loginController.createView());
        } else {
            console.error('main element not found!!!!!')
        }
        // console.log('Router#setLogin()')
        // document.getElementById('main-container')!.replaceWith(this.loginController.createView());
    }

}