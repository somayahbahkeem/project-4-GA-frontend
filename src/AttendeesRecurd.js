import React, {Component} from 'react';
import {allAttendances,email} from './Attendees/api'
import {Link} from 'react-router-dom';
import "./AttendeesRecurd.css";


  class AttendeesRecurd extends Component{
    state={
      students:[],
      // student:{}
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
  componentDidMount(){
      const user = this.props.user
      // const studentId = this.props.studentId
      allAttendances(this.props.courceId)
      .then(response => {
         let allStudents = response.data.students;
         console.log(allStudents)
         allStudents = allStudents.map(student => {
           student.present = 0
           student.absent = 0
           student.absentExcus = 0
           student.late = 0
           student.lateExcus = 0
           student.attendees.forEach(attendance => {
            if (attendance.record === "Present") {
              student.present++
              // if(present>=3){
              //   present
              // }
            } else if (attendance.record === "Absent"){
              student.absent++
            } else if (attendance.record === "Absent Excus"){
              student.absentExcus++
            }else if (attendance.record === "Late"){
            student.late++
          }else if (attendance.record === "Late Excus"){
            student.lateExcus++
          }
           })
           return student
         })
         this.setState({
             students:allStudents
         })
      })
      .catch((error) => console.log(error))

  }

  render(){
    return(
        <div className="AttendeesRecurd">
          <br/>   
            <table>
             <thead>
               <tr>
               <th>Student Name</th>
                <th>present</th> 
                <th>Absent</th>
                <th>Absent Excuse</th>
                <th>Late</th>
                <th>Late Excuse</th>
                <th>Send Warning</th>

              </tr>
            </thead>
            <tbody>
               {this.state.students.map((student,index) => (
              <tr key={index}>
                  <td>{student.firstName} {student.lastName}</td> 
                  <td>{student.present}</td> 
                  {/* <td>{student.absent}</td> */}
                  {student.absent >= 3 ? <td style={{color: 'red', backgroundColor: 'yellow'}}>{student.absent}</td>  : <td>{student.absent}</td>  }
                  {/* <td>{student.absentExcus}</td> */}
                  {student.absentExcus >= 3 ? <td style={{color: 'red', backgroundColor: 'yellow'}}>{student.absentExcus}</td>  : <td>{student.absentExcus}</td>  }
                  {/* <td>{student.late}</td> */}
                  {student.late >= 3 ? <td style={{color: 'red', backgroundColor: 'yellow'}}>{student.late}</td>  : <td>{student.late}</td>  }
                  {/* <td>{student.lateExcus}</td> */}
                  {student.lateExcus >= 3 ? <td style={{color: 'red', backgroundColor: 'yellow'}}>{student.lateExcus}</td>  : <td>{student.lateExcus}</td>  }
                  <td><button onClick={()=> this.sendEmail(student._id)}>Send</button></td>
                  
              </tr>
                ))}
            </tbody>
          </table>
          <br/>
                <Link to={`/optionPage/${this.props.courceId}`}><button>Back</button></Link>
                <button onClick ={this.printFunction}>Print</button>
      </div>
        )
    }
}

export default AttendeesRecurd; 