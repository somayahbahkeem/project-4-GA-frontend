import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class CourcesEdit extends Component{
    state={
        dataForm:{
            courceName:" ",
            imge:" "
        }
    }

    componentDidMount(){
        const user = this.props.user;
        const courcesId = this.props.match.params.id;
        show(user,courcesId)
        .then((response) => {
            console.log("res", response)
            const cours = response.data.cours
            console.log(cours)
            this.setState({
                dataForm:cours
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
        const courcesId = this.props.coursId;
        const updateCources = this.state.dataForm;
        update(user,updateCources,courcesId)
        .then(() => this.props.history.push(`/cources`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
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



export default withRouter(CourcesEdit)