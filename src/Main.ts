import { Router } from "./Router";

class Main {

    public constructor() {
        console.log('constructed new instance of program');
    }

    router: Router = new Router();

    public launchApp(): void {
        this.router.handleRequest();
    }
}

const main = new Main();

// global actions:
declare global {
    interface Window {
        Router: Router;
    }
}

window.Router = main.router;

main.launchApp();