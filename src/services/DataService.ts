import { request } from 'http'

export class DataService {

    public async get(url: string): Promise<any> {
        const options = {
            hostname: url,
            method: 'GET'
        }
        return new Promise((resolve, reject) => {
            let result = '';
            const req = request(options, res => {
                console.log(`statusCode: ${res.statusCode}`)
                res.on('data', data => {
                    result += data
                })
                req.on('error', error => {
                    console.error(error);
                    reject(error);
                })

                req.on('end', () => {
                    req.end()
                    resolve(result)
                })
            })
        })
    }
}

const result = new DataService().get('https://postman-echo.com/get?foo1=bar1&foo2=bar2');
console.log('a');