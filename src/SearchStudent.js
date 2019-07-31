import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {studentSearch} from "./student/api"
import {email} from './Attendees/api'
// import {index} from './attendees/api'
import "./SearchStudent.css";

class SearchStudent extends Component{
  state={
    student:{
      attendees: []
    },
    email: ""
}
printFunction =()=> {
  window.print();
}
sendEmail = (studentId) =>{
  email(studentId)
  .then((response) => {
    this.props.alert("Email sent!", "success")
  })
  .catch((error) => {
    this.props.alert("Email Failed!", "failure")
  })
}

handleChange = event => this.setState({
  [event.target.name]: event.target.value
})
onSubmit = (e)=> {
  e.preventDefault()
  let email = this.state.email
  studentSearch(email)
  .then(response => {
     const student = response.data.student || this.state.student;
     console.log(response)
     this.setState({
         student:student
     })
  })
  .catch((error) => console.log(error))
}
  render(){ 
    return(
        <div className="SearchStudent">
          <br/>
          <form onSubmit={this.onSubmit}> 
           Search For Student By Email: 
           <input 
              required
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}/>
          <input type="submit"/>
          </form>
          <br/>
          <table>
             <thead>
               <tr>
                <th>Date</th>
                <th>time</th>
                <th>Record</th> 
              </tr>
            </thead>
            <tbody>
              {this.state.student.attendees.map((attendees, index) => (
                <tr key={index}>
                <td>{new Date(attendees.createdAt).getFullYear()}-{new Date(attendees.createdAt).getMonth() + 1}-{new Date(attendees.createdAt).getDate()}</td>
                <td>{new Date(attendees.createdAt).getHours()}:{new Date(attendees.createdAt).getMinutes()}</td>
                <td>{attendees.record}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
          <br/>
                <button onClick={()=> this.sendEmail(this.state.student._id)}>Send</button>
                <Link to={`/optionPage/${this.props.courcesId}`}><button>Back</button></Link>
                <button onClick ={this.printFunction}>Print</button>  

        </div>
    )
}
}

export default SearchStudent; 