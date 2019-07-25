// Attendees api
import apiUrl from '../apiConfig';
import Axios from 'axios'


export const index = (user,studentId) => {
    return  Axios({
        method:'GET',
        url: apiUrl + `/students/${studentId}/attendees`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const show = (user, attendeestId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/attendees/${attendeestId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const create= (user,newAttendees,studentID) => {
    return Axios({
        method:'POST',
        url:apiUrl + `/students/${studentID}/attendees/create`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            attendees:newAttendees
        }
    })
}


export const destroy = (user,attendeesId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/attendees/${attendeesId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}


export const update = (user,attendeesId,updateAttendees) => {
    return Axios({
        method:'PUT',
        url:apiUrl +`/attendees/${attendeesId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        },
        data:{
            attendees:updateAttendees
        }
    })
}



///show of student /students_routers

export const showStudent = (user, studentId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/students/${studentId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}