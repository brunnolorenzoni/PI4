import axios from 'axios';

const registerUser = {

    register(data, props)
    {

        console.log(data)

        axios.post('http://localhost:3001/api/user/register', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }

}

export default registerUser;



