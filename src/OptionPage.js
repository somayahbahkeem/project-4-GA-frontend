import React from 'react';
import {Link} from 'react-router-dom'
import "./OptionPage.css";

const OptionPage= () => {
    return(
     
     <div className="OptionPage">

     <div className="row">

        <div className="column">
        <Link to="/cources">All</Link>
        </div>

        <div className="column">
        <Link to="/cources">Absent</Link>
        </div>

        <div className="column">
        <Link to="/cources">late</Link>
        </div>

        <div className="column">
        <Link to="/cources">Attendess</Link>
        </div>

        </div>

     </div>
     
    )
}

export default OptionPage; 