import React, {Component} from 'react';
import {show} from './api'

class AttendeesShow extends Component{
    state = {
        attendees:{}
    }

    componentDidMount(){
        const user = this.props.user;
        const attendeesId = this.props.attendeesId;
        show(user,attendeesId)
        .then((response) => {
            const showattendees = response.data.attendees;
            this.setState({
                attendees:showattendees
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        // console.log(this.props.attendeesId)
        return(
            <div>
                <h1>{this.state.attendees.createdAt}</h1>
                <h1>{this.state.attendees.record}}</h1>
            </div>
        )
    }
}



export default AttendeesShow