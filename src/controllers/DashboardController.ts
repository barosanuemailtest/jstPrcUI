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
                const result = await this.dataService.get('http://localhost:8080/users/getall', '85db5rj0nchrjtc2yylf');
                console.log('end of get some!')
                console.log(result)
            } catch (error) {
                console.error(error)
            }

        });
        container.appendChild(getDataButton);

        return container;
    }
}