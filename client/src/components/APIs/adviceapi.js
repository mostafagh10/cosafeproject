import axios from 'axios';

export const addadviceprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://cosafebackend3.onrender.com/advice' , data , config)

    return response
};

export const editadviceprocess = async (data,adviceId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://cosafebackend3.onrender.com/advice/${adviceId}` , data , config)

    return response
};

export const getadvicesprocess = async () => {
    const response = await axios.get('https://cosafebackend3.onrender.com/advice')

    return response
};

export const deleteadvicesprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.delete('https://cosafebackend3.onrender.com/advice',data,config)

    return response
};