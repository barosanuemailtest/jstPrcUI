export class Router {

    private getRoute(): string {
        return window.location.pathname;
    }

    private setMainContainer(htmlPah: string): void {
        document.getElementById('main-container')!.innerHTML = `<iframe src="${htmlPah}"></iframe>`;
    }

    public handleRequest() {
        console.log('handling request for: ' + this.getRoute());
        switch (this.getRoute()) {
            case '/login':
                this.setMainContainer('./html/login.html')
                break;
            default:
                this.setMainContainer('./html/main.html')
                break;
        }
    }

}