import { BaseController } from "./BaseController";
import { DataService } from "../services/DataService";
import { SessionToken, AccessRights } from "../models/AuthModels";

export class DashboardController extends BaseController {

    private dataService: DataService = new DataService()
    private usersTable: HTMLTableElement = this.initializeUsersTable();

    createView(sessionToken: SessionToken | null): HTMLDivElement {
        this.container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'

        if (sessionToken) {
            // const getDataButton = this.createButton('get some!', async () => {
            //     try {
            //         console.log('getting some:');
            //         const result = await this.dataService.getAllUsers(sessionToken.tokenId)
            //         console.log(result)
            //         console.log('end of get some!')
            //     } catch (error) {
            //         console.error(error)
            //     }

            // });
            // this.container.appendChild(getDataButton);
            this.generateDataButtons(sessionToken);
        }
        this.container.appendChild(this.usersTable);
        return this.container;
    }

    private generateDataButtons(sessionToken: SessionToken) {
        if (sessionToken.accessRights.includes(AccessRights.CREATE)) {
            const button: HTMLButtonElement = this.createButton('Create user', {});
            this.container.appendChild(button);
        }
        if (sessionToken.accessRights.includes(AccessRights.DELETE)) {
            const button: HTMLButtonElement = this.createButton('Delete user', {});
            this.container.appendChild(button);
        }
        if (sessionToken.accessRights.includes(AccessRights.READ)) {
            const button: HTMLButtonElement = this.createButton('Get users', async () => {
                const users = await this.dataService.getAllUsers(sessionToken.tokenId)
                for (const user of users) {
                    this.addTableRow(user.id, user.name);
                }
            });
            this.container.appendChild(button);
        }
        if (sessionToken.accessRights.includes(AccessRights.UPDATE)) {
            const button: HTMLButtonElement = this.createButton('Update users', {});
            this.container.appendChild(button);
        }
    }

    private initializeUsersTable(): HTMLTableElement {
        const usersTable = document.createElement('table');
        const tableBody = document.createElement('tbody');
        usersTable.appendChild(this.generateTableHead(
            'id',
            'Name'
        ))
        usersTable.appendChild(tableBody);
        usersTable.setAttribute('border', '1');
        return usersTable
    }

    private generateTableHead(...values: any): HTMLTableSectionElement {
        const tableHead = document.createElement('thead');
        const tableRow = document.createElement('tr');
        tableHead.appendChild(tableRow)
        for (const value of values) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(value);
            cell.appendChild(cellText);
            tableRow.appendChild(cell);
        }
        return tableHead
    }

    private addTableRow(...values: any): void {
        const tableRow = document.createElement('tr');
        for (const value of values) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(value);
            cell.appendChild(cellText);
            tableRow.appendChild(cell);
        }
        const tableBody = this.usersTable.getElementsByTagName('tbody')[0];
        tableBody.appendChild(tableRow);
    }
}