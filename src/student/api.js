import apiUrl from '../apiConfig';
import Axios from 'axios'


export const index = (user) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/students',
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const show = (user, studentId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/students/${studentId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const create = (user,newStudent) => {
    return Axios({
        method:'POST',
        url:apiUrl + '/students',
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            student:newStudent
        }
    })
}


export const destroy = (user,studentId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/students/${studentId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,updateStudent,studentId) => {
    return Axios({
        method:'PUT',
        url:apiUrl + `/students/${studentId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            student:updateStudent
        }
    })
}