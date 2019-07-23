import React, {Component} from 'react';
import {index,destroy,showStudent} from './api'
import {Link,withRouter} from 'react-router-dom';
import "./Attendees.css";


class AttendeesIndex extends Component{
    state={
        attendees:[],
        student:{}
    }

    componentDidMount(){
        const user = this.props.user
        const studentId = this.props.studentId
        // console.log(user,studentId)
        //api for attendees
        index(user,studentId)
        .then(response => {
           const allAttendees = response.data.attendees;
           this.setState({
               attendees:allAttendees
           })
        })
        .catch((error) => console.log(error))


        //api for student // firstname , lastname
        showStudent(user,studentId)
        .then((response) => {
            console.log(response)
            this.setState({
                student:response.data.student 
            })
        })
        .catch(error => console.log(error))

    }

    destroy = (attendeesId) => {
        const user = this.props.user
        destroy(user,attendeesId)
        .then(() => this.props.alert('Deleted successful','success'))
        .then(() => {
           const newAttendees = this.state.attendees.filter((attendees) => attendees._id != attendeesId)
            this.setState({
                attendees:newAttendees
            })
        })
        .catch((error) => console.log(error))
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                 <Link to={`/students/${this.props.match.params.id}/attendees/create`}>Create</Link>
                <table>
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Date</th> 
                        <th>Time</th>
                        <th>Record</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.attendees.map((attendees,index) => (
                        <tr key={index}>
                            <td>{this.state.student.firstName} {this.state.student.lastName}</td>
                            <td>{new Date(attendees.createdAt).getFullYear()}-{new Date(attendees.createdAt).getMonth()}-{new Date(attendees.createdAt).getDay()}</td>
                            <td>{new Date(attendees.createdAt).getHours()}:{new Date(attendees.createdAt).getMinutes()}</td>
                            <td>{attendees.record}</td>
                            <td><button onClick={() => this.destroy(attendees._id)}>Delete</button></td>
                            <td><Link to={`/attendees/${attendees._id}/edit`} /><button>Edit</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default withRouter(AttendeesIndex)