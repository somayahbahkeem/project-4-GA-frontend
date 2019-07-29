import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'

class StudentCreate extends Component{
    state = {
        dataForm:{
            firstName:" ",
            lastName:" ",
            email:" ",
            phone:" "
        }
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


    handleSubmit = (event) => {
        event.preventDefault();
        const newStudent = this.state.dataForm
        const user = this.props.user
        const courcesId = this.props.courcesId
        create(user,newStudent,courcesId)
        // .then(() => alert('created'))
        .then(() => this.props.history.push(`/cources/${courcesId}/studentInformation`))
        .catch((error) => this.props.alert(error.message, 'danger'))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input onChange={this.handleChange} type="text" name="firstName" value={this.state.dataForm.firstName}/>
                <label>Last Name</label>
                <input  onChange={this.handleChange} type="text" name="lastName" value={this.state.dataForm.lastName}/>
                <label>Email</label>
                <input onChange={this.handleChange} type="text" name="email" value={this.state.dataForm.email}/>
                <label>Phone Number</label>
                <input onChange={this.handleChange} type="text" name="phone" value={this.state.dataForm.phone}/>
                <button type="submit">Create</button>
            </form>
        )
    }
}



export default withRouter(StudentCreate)