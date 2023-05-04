import axios from 'axios';

export const addnewsprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://cosafebackend3.onrender.com/news' , data , config)

    return response
};

export const getnewsprocess = async (data) => {
    const response = await axios.get('https://cosafebackend3.onrender.com/news')

    return response
};

export const editnewsprocess = async (data,adviceId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://cosafebackend3.onrender.com/news/${adviceId}` , data , config)

    return response
};