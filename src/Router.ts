export class Router {

    private getRoute(): string {
        return window.location.pathname;
    }

    private setContainer(htmlPah: string): void {
        document.getElementById('main-container')!.innerHTML = `<object type="text/html" data=${htmlPah} ></object>`;
    }

    public handleRequest() {
        console.log('handling request for: ' + this.getRoute());
        switch (this.getRoute()) {
            case '/login':
                this.setLogin();
                break;
            default:
                this.setContainer('./html/main.html');
                break;
        }
    }

    public setLogin() {
        this.setContainer('./html/login.html')
    }

}