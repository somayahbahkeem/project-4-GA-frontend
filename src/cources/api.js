// cources api
import apiUrl from '../apiConfig';
import Axios from 'axios'


export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/cources',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const courcesList = () => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/courcesList',
    })
}

export const show = (user, courcesId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/cources/${courcesId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const create = (user,newCours) => {
    return Axios({
        method:'POST',
        url:apiUrl + '/cources',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            cours:newCours
        }
    })
}


export const destroy = (user,courcesId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/cources/${courcesId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,updateCours,courcesId) => {
    return Axios({
        method:'PUT',
        url:apiUrl + `/cources/${courcesId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            cours:updateCours
        }
    })
}