import React, {Component} from 'react';
import {index,destroy} from './api'
import {Link} from 'react-router-dom';
import "./Student.css";

class StudentIndex extends Component{
    state={
        students:[]
    }
    printFunction =()=> {
        window.print();
      }

    componentDidMount(){
        const user = this.props.user
        const courcesId = this.props.courcesId
        index(user, courcesId)
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
                <br/>
                 <Link to={`/cources/${this.props.courcesId}/students/create`}><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLS1MN0A3/user_2.jpg'  height="80px" width="100px"/></Link>
                <br/>
                <br/>
                <table >
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th> 
                        <th>Email</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Attendees</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((student,index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td><button onClick={() => this.destroy(student._id)}>Delete</button></td>
                            <td><Link to={`/cources/${this.props.courcesId}/students/${student._id}/edit`}><button>Edit</button></Link></td>
                            <td><Link to={`/cources/${this.props.courcesId}/students/${student._id}/attendees`}><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLHR9AC9F/user_4.jpg'  height="50px" width="50px"/></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link to={`/cources`}><button>Back</button></Link>
                <button onClick ={this.printFunction}>Print</button>
            </div>
        )
    }
}



export default StudentIndex