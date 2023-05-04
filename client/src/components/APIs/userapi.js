import axios from 'axios';

export const addinfecteduserprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://cosafebackend3.onrender.com/user/client/infected' , data , config)

    return response
};

export const signupprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://cosafebackend3.onrender.com/user/client/signup' , data , config)

    return response
};

export const getusersprocess = async (data) => {
    const response = await axios.get('https://cosafebackend3.onrender.com/user/client')

    return response
};

export const edituserprocess = async (data,userId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://cosafebackend3.onrender.com/user/client/${userId}` , data , config)

    return response
};