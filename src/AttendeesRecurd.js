import React, {Component} from 'react';
import {index,showStudent, allAttendances} from './Attendees/api'
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


  componentDidMount(){
      const user = this.props.user
      // const studentId = this.props.studentId
      allAttendances(user, this.props.courceId)
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

      // showStudent(user,studentId)
      // .then((response) => {
      //     console.log(response)
      //     this.setState({
      //         student:response.data.student 
      //     })
      // })
      .catch(error => console.log(error))

  }

  render(){
    return(
        <div className="AttendeesRecurd">
          <h6>Attendees Recurd</h6>    
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
                  <td>{student.absent}</td>
                  <td>{student.absentExcus}</td>
                  <td>{student.late}</td>
                  <td>{student.lateExcus}</td>
                  <td><button>Send</button></td>
                  
              </tr>
                ))}
            </tbody>
          </table>
          <br/>
                <Link to={`/optionPage/:cource_id`}><button>Back</button></Link>
                <button onClick ={this.printFunction}>Print</button>
      </div>
        )
    }
}

export default AttendeesRecurd; 