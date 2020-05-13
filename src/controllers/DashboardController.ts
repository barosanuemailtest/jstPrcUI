import { BaseController } from "./BaseController";
import { DataService } from "../services/DataService";

export class DashboardController extends BaseController {

    private dataService: DataService = new DataService()

    createView(): HTMLDivElement {
        const container = document.createElement('div');
        container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'

        const getDataButton = this.createButton('get some!', async () => {
            try {
                console.log('getting some:');
                const result = await this.dataService.getWithFetch('http://localhost:8080/users/getall', '2kj43e2j0a300ygu2fxc66x');
                console.log(result)
                console.log('end of get some!')
            } catch (error) {
                console.error(error)
            }

        });
        container.appendChild(getDataButton);

        return container;
    }
}