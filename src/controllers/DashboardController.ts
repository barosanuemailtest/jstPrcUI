import { BaseController } from "./BaseController";
import { DataService } from "../services/DataService";

export class DashboardController extends BaseController {

    private dataService: DataService = new DataService()

    createView(): HTMLDivElement {
        const container = document.createElement('div');
        container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'

        const getDataButton = this.createButton('get some!', async () => {
            console.log('getting some:');
            const result = await this.dataService.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2');
            console.log('end of get some!')

            console.log(result)
        });
        container.appendChild(getDataButton);

        return container;
    }

    public async getStuff() {

    }

}