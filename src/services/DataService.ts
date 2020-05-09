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
                res.on('error', error => {
                    console.error(error);
                    reject(error);
                })

                res.on('end', () => {
                    req.end()
                    resolve(result)
                })
            })
        })
    }
}