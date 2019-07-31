import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class StudentEdit extends Component{
    state={
        dataForm:{
            firstNamr:"",
            lastNamr:"",
            email:"",
            phone:""
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const studentId = this.props.match.params.id;
        show(user,studentId)
        .then((response) => {
            const student = response.data.student
            this.setState({
                dataForm:student
            })
        })
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(this.props)
        const user = this.props.user;
        const studentId = this.props.match.params.id;
        const updateStudent = this.state.dataForm;
        update(user,updateStudent,studentId)
        .then(() => this.props.history.push(`/cources/${this.props.courcesId}/studentInformation/`))
        .catch((error) => console.log(error))
    }


    render(){
   
        return(
             <form onSubmit={this.handleSubmit}>

                    <label>First Name</label>
                    <input onChange={this.handleChange} type="text" name="firstName" value={this.state.dataForm.firstNamr}/>
                    <label>Last Name</label>
                    <input  onChange={this.handleChange} type="text" name="lastName" value={this.state.dataForm.lastNamr}/>
                    <label>Email</label>
                    <input onChange={this.handleChange} type="text" name="email" value={this.state.dataForm.email}/>
                    <label>Phone Number</label>
                    <input onChange={this.handleChange} type="text" name="phone" value={this.state.dataForm.phone}/>
                    <button type="submit">Update</button>
            </form>
        )
    }
}



export default withRouter(StudentEdit)