import React,{Component} from 'react'
import {create} from './api'
import {withRouter} from 'react-router-dom'

class CourcesCreate extends Component{
    state = {
        dataForm:{
            courceName:" ",
            imge:" "
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
        const newCours = this.state.dataForm
        const user = this.props.user
        create(user,newCours)
        // .then(() => alert('created'))
        .then(() => this.props.history.push('/cources'))
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Cources Name</label>
                <input onChange={this.handleChange} type="text" name="courceName" value={this.state.dataForm.courceName}/>
                <label>Imge</label>
                <input  onChange={this.handleChange} type="text" name="imge" value={this.state.dataForm.imge}/>
                <button type="submit">Create</button>
            </form>
        )
    } 
}


export default withRouter(CourcesCreate)