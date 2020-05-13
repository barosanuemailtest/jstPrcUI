import { BaseController } from "./BaseController";
import { DataService } from "../services/DataService";
import { SessionToken } from "../models/AuthModels";

export class DashboardController extends BaseController {

    private dataService: DataService = new DataService()

    createView(sessionToken: SessionToken): HTMLDivElement {
        const container = document.createElement('div');
        container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'

        const getDataButton = this.createButton('get some!', async () => {
            try {
                console.log('getting some:');
                const result = await this.dataService.getAllUsers(sessionToken.tokenId)
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