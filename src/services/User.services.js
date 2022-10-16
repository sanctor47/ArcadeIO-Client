import HttpClient from "./HttpClient";

const RESOURCE = "users"

export const registerUser = async (data) => {
    try {
        const response = await HttpClient.post(`${RESOURCE}/register`, data)
        return response.data.data
    } catch (e) {
        return e
    }
}

export const loginUser = async (data) => {
    try {
        const response = await HttpClient.post(`${RESOURCE}/login`, data)
        console.log(response)
        return response.data.data
    } catch (e) {
        return e
    }
}

export const getUserById = async (data) => {
    try {
        const response = await HttpClient.post(`${RESOURCE}/id/${data}`)
        return response.data.data
    } catch (e) {
        return e
    }
}