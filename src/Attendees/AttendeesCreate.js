import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'

class AttendeesCreate extends Component{
    state = {
        dataForm:{
            record:" "
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
            const newAttendees = this.state.dataForm
            const user = this.props.user
            const studentId = this.props.match.params.id
            // console.log(user,newAttendees,studentId)
            create(user,newAttendees,studentId)
            // .then(() => alert('created'))
             .then(() => this.props.history.push(`/students/${studentId}/attendees`))
            .catch((error) => console.log(error))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Record</label>
                <input  onChange={this.handleChange} type="text" name="record" value={this.state.dataForm.record}/>
                <button type="submit">Create</button>
            </form>
        )
    }
}



export default withRouter(AttendeesCreate)