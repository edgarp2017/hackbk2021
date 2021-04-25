import axios from 'axios';

const URL = 'http://127.0.0.1:5000/api'

const getLocations = () => {
    return axios.get(`${URL}/location`)
}

const addLocation = (data) => {
    return axios.post(`${URL}/location`, data)
}

const resultText = (data) => {
    return axios.get(`${URL}/txt/${data}`)
}

export {
    getLocations,
    addLocation,
    resultText
}