// Student api
import apiUrl from '../apiConfig';
import Axios from 'axios'

export const index = (user,courcesId) => {
    return  Axios({
        method:'GET',
        url: apiUrl + `/cources/${courcesId}/students`,
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


export const create = (user,newStudent,courcesId) => {
    return Axios({
        method:'POST',
        url:apiUrl + `/cources/${courcesId}/students`,
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
export const studentSearch = (email) => {
    return  Axios({
        method:'GET',
        url: apiUrl + '/students/search/' + email,
    })
}