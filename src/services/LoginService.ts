import { SessionToken } from "../models/AuthModels";

export class LoginService {

    public async login(username: string, password: string): Promise<SessionToken | null> {
        if (password == 'a') {
            return {
                accessRights: [],
                expirationTime: new Date(),
                tokenId: '123',
                userName: username,
                valid: true
            }
        }
        return null;

    }
}