import React, {Component} from 'react';
import {show} from './api'

class CourcesShow extends Component{
    state = {
        cours:{}
    }

    componentDidMount(){
        const user = this.props.user;
        const coursId = this.props.coursId;
        show(user,coursId)
        .then((response) => {
            const showCours = response.data.cours;
            this.setState({
                cours:showCours
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        // console.log(this.props.courcesId)
        return(
            <div>
                <h1>{this.state.cours.courceName}</h1>
                <h1>{this.state.cours.imge}</h1>
            </div>
        )
    }
}



export default CourcesShow