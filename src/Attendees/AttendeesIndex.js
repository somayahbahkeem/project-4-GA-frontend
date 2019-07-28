import React, {Component} from 'react';
import {index,destroy,showStudent} from './api'
import {Link,withRouter} from 'react-router-dom';
import "./Attendees.css";


class AttendeesIndex extends Component{
    state={
        attendees:[],
        student:{}
    }
    printFunction =()=> {
        window.print();
      }


    componentDidMount(){
        const user = this.props.user
        const studentId = this.props.studentId
        // const courcesId = this.props.courcesId
        // console.log(user,studentId,courcesId)
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
        console.log(user,attendeesId)

        destroy(user,attendeesId)
        
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
                 <Link to={`/students/${this.props.match.params.id}/attendees/create`}><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLHR9AC9F/user_4.jpg'  height="80px" width="100px"/></Link>
                <table>
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Date</th> 
                        <th>Time</th>
                        <th>Record</th>
                        <th>Delete</th>
                        <th>Edit</th>
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
                            <td><Link to={`/attendees/${attendees._id}/edit`} ><button>Edit</button></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                    <Link to={`/cources/${this.props.courcesId}/students`}><button>Back</button></Link> 
                <button onClick ={this.printFunction}>Print</button>
            </div>
        )
    }
}



export default withRouter(AttendeesIndex)