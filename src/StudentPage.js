import React, {Component} from 'react';
import { allAttendances} from './Attendees/api'
import "./StudentPage.css";
  class StudentPage extends Component{
  
    state={
        students:[],
        // student:{}
    }
    printFunction =()=> {
        window.print();
      }
  
  
    componentDidMount(){
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

        .catch(error => console.log(error))
  
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
                </tr>
                  ))}
              </tbody>
            </table>
            <br/>
      </div>
        )
    }
}

export default StudentPage; 