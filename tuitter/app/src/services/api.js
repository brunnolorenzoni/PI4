
import axios from 'axios';

const config = {
    headers: {
        token: sessionStorage.getItem('token')
    }
}

export const setTuitte = async (data) => {

    return await axios.post('http://localhost:3001/api/tuitte/', {data: data}, config)
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error;
    })

}

export const getTuitte = async (data) => {

    return await axios.get('http://localhost:3001/api/tuitte/', config)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return error;
    })

}

export const searchUser = async (data) => {

    return await axios.post('http://localhost:3001/api/search/user', {search: data}, config)
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error;
    })

}