import React, {Component} from 'react';
import { courcesList} from './cources/api'
import {Link} from 'react-router-dom';
import "./CourcesList.css";

class CourcesList extends Component{
    state={
        cources:[]
    }

    componentDidMount(){
        courcesList()
        .then(response => {
           const allCources = response.data.cources;
           console.log(response)
           this.setState({
               cources:allCources
           })
        })
        .catch((error) => console.log(error))
    }

    render(){
        console.log(this.props.user)
        return(
            <div>
                
                <br/>
                <div className="row cources">
                {this.state.cources.map((cource,index) => (
                 
                        <div key={index} className="column"> 
                      
                            <Link to={`/cources/${cource._id}/students/studentPage`}><img src={cource.imge} width="100%"/></Link>
                            <h4>{cource.courceName}</h4>

                        </div>
                ))}
                </div>

            </div>
        )
    }
}



export default CourcesList