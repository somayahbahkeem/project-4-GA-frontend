import React, {Component} from 'react';
import {index,destroy} from './api'
import {Link} from 'react-router-dom';
import "./Student.css";

class StudentIndex extends Component{
    state={
        students:[]
    }

    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(response => {
           const allStudents = response.data.students;
           this.setState({
               students:allStudents
           })
        })
        .catch((error) => console.log(error))
    }

    destroy = (studentId) => {
        const user = this.props.user
        destroy(user,studentId)
        .then(() => this.props.alert('Deleted successful','success'))
        .then(() => {
           const newStudents = this.state.students.filter((student) => student._id != studentId)
            this.setState({
                students:newStudents
            })
        })
        .catch((error) => console.log(error))
    }
    render(){
        console.log(this.props.user)
        return(
            <div>
                 <Link to='/create'>Create</Link>
                <table >
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th> 
                        <th>Email</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((student,index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td><button onClick={() => this.destroy(student._id)}>Delete</button></td>
                            <td><Link to={`/students/${student._id}/edit`}><button>Edit</button></Link></td>
                            <td><Link to={`/students/${student._id}/attendees`}><button>View</button></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default StudentIndex