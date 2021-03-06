import axios from 'axios';

const registerUser = {

    async register(data)
    {

        var request = await axios.post('http://localhost:3001/api/user/register', data)
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

export default registerUser;



