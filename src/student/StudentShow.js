import React, {Component} from 'react';
import {show} from './api'

class StudentShow extends Component{
    state = {
        student:{}
    }

    componentDidMount(){
        const user = this.props.user;
        const studentId = this.props.studentId;
        show(user,studentId)
        .then((response) => {
            const showStudent = response.data.student;
            this.setState({
                student:showStudent
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        // console.log(this.props.studentId)
        return(
            <div>
                <h1>{this.state.student.firstName}</h1>
                <h1>{this.state.student.lastName}</h1>
                <h1>{this.state.student.email}</h1>
                <h1>{this.state.student.phone}</h1>
            </div>
        )
    }
}



export default StudentShow