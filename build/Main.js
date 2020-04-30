import { Router } from "./Router";
class Main {
    constructor() {
        this.router = new Router();
        console.log('constructed new instance of program');
    }
    launchApp() {
        this.router.handleRequest();
    }
}
new Main().launchApp();
