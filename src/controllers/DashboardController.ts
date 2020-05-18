import { BaseController } from "./BaseController";
import { DataService } from "../services/DataService";
import { SessionToken, AccessRights } from "../models/AuthModels";
import { User } from "../models/UserModel";

export class DashboardController extends BaseController {

    private dataService: DataService = new DataService()
    private usersTable: HTMLTableElement = this.initializeUsersTable();
    private userDetailsArea = document.createElement("div");
    private sessionTokenId: string = '';

    createView(sessionToken: SessionToken | null): HTMLDivElement {
        this.container.innerText = 'This is the Dashboard! You should not be here if not logged in!!!'

        if (sessionToken) {
            this.sessionTokenId = sessionToken.tokenId
            this.generateDataButtons(sessionToken);
        }
        this.container.append(this.usersTable, this.userDetailsArea);
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
                    this.addUserTableRow(user);
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
            'Name',
            'Email'
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

    private addUserTableRow(user: User): void {
        const tableRow = document.createElement('tr');

        this.addCellToTableRow(user.name, tableRow);
        this.addCellToTableRow(user.email, tableRow);
        tableRow.onclick = async () => {
            const userDetails = await this.dataService.getUserDetails(
                this.sessionTokenId,
                user.id
            );
            this.userDetailsArea.innerText = JSON.stringify(userDetails)
        }

        const tableBody = this.usersTable.getElementsByTagName('tbody')[0];
        tableBody.appendChild(tableRow);
    }

    private addCellToTableRow(cellValue: string, tableRow: HTMLTableRowElement) {
        const cell = document.createElement('td');
        const cellText = document.createTextNode(cellValue);
        cell.appendChild(cellText);
        tableRow.appendChild(cell);
    }
}