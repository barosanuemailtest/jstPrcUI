import { SessionToken } from "../models/AuthModels";
import { DataService } from "./DataService";

export class LoginService {

    private dataService: DataService = new DataService();

    public async login(username: string, password: string): Promise<SessionToken | null> {

        return await this.dataService.login(username, password);
    }
}