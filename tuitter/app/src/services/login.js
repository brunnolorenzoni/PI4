import axios from 'axios';

const loginUser = {

    async login(data)
    {

        var request = await axios.post('http://localhost:3001/api/user/login', data)
        .then(function (response) {
            sessionStorage.setItem('token', response.data.token);
            window.location = '/'
        })
        .catch(function (error) {
            console.debug(error.response)
            return error.response;
        })

        return (request);

    }

}

export default loginUser;



