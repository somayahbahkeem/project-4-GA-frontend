import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'

class StudentCreate extends Component{
    state = {
        dataForm:{
            firstNamr:" ",
            lastNamr:" ",
            email:" "
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
        create(user,newStudent)
        // .then(() => alert('created'))
        .then(() => this.props.history.push('/students'))
        .catch((error) => console.log(error))
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
                <button type="submit">Create</button>
            </form>
        )
    }
}



export default withRouter(StudentCreate)