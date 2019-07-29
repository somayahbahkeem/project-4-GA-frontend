import React, {Component} from 'react';
import {index,destroy} from './api'
import {Link} from 'react-router-dom';
import "./Cources.css";

class CourcesIndex extends Component{
    state={
        cources:[]
    }

    componentDidMount(){
        const user = this.props.user
        index(user)
        .then(response => {
           const allCources = response.data.cources;
           this.setState({
               cources:allCources
           })
        })
        .catch((error) => console.log(error))
    }

    destroy = (courcesId) => {
        const user = this.props.user
        destroy(user,courcesId)
        .then(() => this.props.alert('Deleted successful','success'))
        .then(() => {
           const newCources = this.state.cources.filter((cources) => cources._id != courcesId)
            this.setState({
                cources:newCources
            })
        })
        .catch((error) => console.log(error))
    }
    render(){
        console.log(this.props.user)
        return(
            <div>

                
                 <Link to='/cources/create'><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLS1MN0A3/user_2.jpg'  height="80px" width="100px"/></Link>
                <br/>
                <br/>
                <div className="row cources">
                {this.state.cources.map((cource,index) => (
                 
                        <div key={index} className="column">    
                            <Link to={`/OptionPage/${cource._id}`}><img src={cource.imge} width="100%"/></Link>
                            {/* <Link to={`/OptionPage`}><img src={cource.imge} width="100%"/></Link> */}
                            <h4>{cource.courceName}</h4>

                            <section className="buttonSection" >
                            <button onClick={() => this.destroy(cource._id)}>Delete</button>
                            <Link to={`/cources/${cource._id}/edit`}><button>Edit</button></Link>
                            </section>

                        </div>
                ))}
                </div>
                {/* <Link to={'/'}><button>Back</button></Link> */}

            </div>
        )
    }
}



export default CourcesIndex