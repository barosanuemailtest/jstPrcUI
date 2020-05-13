import { User } from "../models/UserModel";
import { SessionToken } from "../models/AuthModels";


export class DataService {

    private readonly baseUrl = 'http://localhost:8080/';
    private readonly loginUrl = this.baseUrl + 'login';



    public async get(url: string, authorization?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            if (authorization) {
                xhr.setRequestHeader('Authorization', authorization)
            }
            xhr.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject({
                            status: this.status,
                            statusText: xhr.statusText
                        });
                    }
                }
            }
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }

    public async getWithFetch(url: string, authorization?: string): Promise<User[]> {
        let options: RequestInit = {}
        if (authorization) {
            options = {
                headers: {
                    Authorization: authorization
                }
            }
        }
        const result = await fetch(url, options);
        return await result.json();
    }

    public async login(username: string, password: string): Promise<SessionToken | null> {
        let options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        const result = await fetch(this.loginUrl, options);
        if (result.status == 201) {
            return await result.json();
        } else {
            return null
        }

    }

}