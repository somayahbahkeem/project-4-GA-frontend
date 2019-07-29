import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {index,destroy} from "./student/api"
// import {showStudent} from './attendess/api'
import "./StudentInformation.css";

class StudentInformation extends Component{ 
    state={
        students:[]
    }

    printFunction =()=> {
        window.print();
      }
      onChange = (event) =>{
        const value = event.currentTarget.value
        const studentId = event.currentTarget.name.split("-")[1]
        // const date = new Date().toString()

        console.log({value, studentId})
      }
      componentDidMount(){
        const user = this.props.user
        const courceId = this.props.courceId
        index(user, courceId)
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
                students: newStudents
            })
        })
        .catch((error) => console.log(error))
    }

      render(){
    return(
     
     <div className="StudentInformation">
        <br/>
          <Link to={`/cources/${this.props.courceId}/students/create`}><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLS1MN0A3/user_2.jpg'  height="80px" width="100px"/></Link>
        <br/>
        <br/>

    <table >
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th> 
                <th>Email</th>
                <th>Phone Number</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
            <tbody>
            {this.state.students.map((student,index) => (
            <tr key={index}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td><button onClick={() => this.destroy(student._id)}>Delete</button></td>
                    <td><Link to={`/cources/${this.props.courceId}/students/${student._id}/edit`}><button>Edit</button></Link></td>
                </tr>
                ))}
            </tbody>
        
    </table>
       <Link to={`/optionPage/${this.props.courceId}`}><button>Back</button></Link> 
       <button onClick ={this.printFunction}>Print</button>

        </div>



    )
}
}


export default StudentInformation; 