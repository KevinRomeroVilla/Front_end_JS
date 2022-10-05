class SparrestApi {
    baseurl = 'http://localhost:8000'
    endPoints = {
        //login: '/auth/login',
        //signup: '/auth/register',
        ads: '/api/ads',
    }
    constructor(){}

    async get(endPoint) {
        const response = await fetch(`${this.baseurl}${endPoint}`)

        if(!response.ok) {
            throw new Error('No existen resultados')
        }

        const data = await response.json()

        return data;
    }
}

export const sparrestApi = new SparrestApi()