export class Router {

    private getRoute(): string {
        return window.location.pathname;
    }

    public handleRequest() {
        console.log('handling request for: ' + this.getRoute());
        switch (this.getRoute()) {

            default:
                break;
        }
    }

}