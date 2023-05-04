import axios from 'axios';

export const addadminprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://cosafebackend3.onrender.com/user/admin/addnewadmin' , data , config)

    return response
};

export const getadminsprocess = async (data) => {
    const response = await axios.get('https://cosafebackend3.onrender.com/user/admin')

    return response
};

export const loginAsAdminProcess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://cosafebackend3.onrender.com/user/admin/login' , data , config)

    return response
};

export const editadminprocess = async (data,adminId) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.patch(`https://cosafebackend3.onrender.com/user/admin/${adminId}` , data , config)

    return response
};


export const addnotificationprocess = async (data) => {
    const config = {
        headers:{
            'content-type' : 'application/json'
        }
    }
    const response = await axios.post('https://co-safe.herokuapp.com/user/client/notification' , data , config)

    return response
};