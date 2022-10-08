class SparrestApi {
    baseurl = 'http://localhost:8000'
    endPoints = {
        login: '/auth/login',
        signup: '/auth/register',
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

    async post(endPoint, body) {
        const token = localStorage.getItem('token')
        const respone = await fetch(`${this.baseurl}${endPoint}`, {
            method:'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if(!respone.ok) {
            throw new Error
        }

        const data = await respone.json()

        return data;
    }

    async delete(endPoint) {
        const token = localStorage.getItem('token')
        const respone = await fetch(`${this.baseurl}${endPoint}`, {
            method:'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await respone.json()

        return data;
    }
}

export const sparrestApi = new SparrestApi()