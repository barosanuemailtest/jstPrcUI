import { Router } from "./Router";

class Main {

    public constructor (){
        console.log('constructed new instance of program');
    }

    private router: Router = new Router();

    public launchApp():void {
        this.router.handleRequest();
    }
}

new Main().launchApp();