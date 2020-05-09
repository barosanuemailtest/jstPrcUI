import { Router } from "./Router";

class Main {

    public constructor() {
        console.log('constructed new instance of program');
    }

    router: Router = new Router();

    public async launchApp(): Promise<void> {
        await this.router.handleRequest();
    }
}

const main = new Main();

main.launchApp();