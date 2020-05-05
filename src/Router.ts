import { MainViewController } from "./controllers/MainViewController";
import { LoginController } from "./controllers/LoginController";
import { DashboardController } from "./controllers/DashboardController";

export class Router {

    private mainViewController: MainViewController = new MainViewController(this);
    private loginController: LoginController = new LoginController(this);
    private dashboardController: DashboardController = new DashboardController(this);
    private mainElement = document.getElementById('main-container');

    private getRoute(): string {
        return window.location.pathname;
    }

    public handleRequest() {
        console.log('handling request for: ' + this.getRoute());
        switch (this.getRoute()) {
            case '/login':
                this.switchToLoginView();
                break;
            case '/board':
                this.switchToDashboardView();
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

    public switchToLoginView() {
        if (this.mainElement) {
            this.mainElement.innerHTML = '';
            this.mainElement.append(this.loginController.createView());
        } else {
            console.error('main element not found!!!!!')
        }
    }

    public switchToDashboardView() {
        if (this.mainElement) {
            this.mainElement.innerHTML = '';
            this.mainElement.append(this.dashboardController.createView());
        } else {
            console.error('main element not found!!!!!')
        }
    }

}