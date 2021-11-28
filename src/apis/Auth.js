import axios from '../requestV2'

const prefix = '/auth';

export const login =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}/login`
    })
}

export const signup =(data)=> {
    return axios({
        method: 'POST',
        data,
        url: `${prefix}/signup`
    })
}

export const verify =(params)=> {
    return axios({
        method: 'GET',
        params,
        url: `user`
    })
}

export const update =(id, data)=> {
    return axios({
        method: 'PUT',
        data,
        url: `${prefix}/${id}`
    })
}

export const destroy =(id)=> {
    return axios({
        method: 'POST',
        url: `${prefix}/${id}/delete`
    })
}

export const getWeb =(id)=> {
    return axios({
        method: 'GET',
        params: {
            id
        },
        url: `${prefix}/get-web`
    })
}
