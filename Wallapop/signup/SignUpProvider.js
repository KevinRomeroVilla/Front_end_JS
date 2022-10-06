import { sparrestApi } from "../SparrestApi.js"

export const createApiUser = async (username, password) => {
    const body = {
        username: username,
        password: password
    }
    
    await sparrestApi.post(sparrestApi.endPoints.signup, body)
}

export const loginApiUser = async (username, password) => {
    const body = {
        username: username,
        password: password
    }

    const data = await sparrestApi.post(sparrestApi.endPoints.login, body)

    return data.accessToken;
}
