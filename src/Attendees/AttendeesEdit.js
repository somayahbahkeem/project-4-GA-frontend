import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class AttendeesEdit extends Component{
    state={
        dataForm:{
            record:" "
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const attendeesId = this.props.match.params.id;
        show(user,attendeesId)
        .then((response) => {
            const attendees = response.data.attendees
            this.setState({
                dataForm:attendees
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
        console.log(this.props)
        const user = this.props.user;
        const attendeesId = this.props.match.params.id;
        const updateAttendees = this.state.dataForm;
        update(user,updateAttendees,attendeesId)
        .then(() => this.props.history.push(`/attendees/${attendeesId}`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Record</label>
                <input  onChange={this.handleChange} type="text" name="record" value={this.state.dataForm.record}/>
                <button type="submit">Create</button>
            </form>
        )
    }
}



export default withRouter(AttendeesEdit)