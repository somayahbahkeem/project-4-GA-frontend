import React, {Component} from 'react';
import {show} from './api'

class CourcesShow extends Component{
    state = {
        cources:{}
    }

    componentDidMount(){
        const user = this.props.user;
        const courcesId = this.props.courcesId;
        show(user,courcesId)
        .then((response) => {
            const showCources = response.data.cources;
            this.setState({
                cources:showCources
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        // console.log(this.props.courcesId)
        return(
            <div>
                <h1>{this.state.cources.firstName}</h1>
                <h1>{this.state.cources.lastName}</h1>
            </div>
        )
    }
}



export default CourcesShow