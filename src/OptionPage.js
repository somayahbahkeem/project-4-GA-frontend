import React from 'react';
import {Link} from 'react-router-dom'
import "./OptionPage.css";

const OptionPage= (props) => {
    return(
    <div className="OptionPage">
     <div className="OptionPage1">

        <div className="column">
        <Link to={`/cources/${props.courceId}/students`}>TAKE ATTENDESS</Link>
        </div>
        <div className="column">
        <Link to={`/cources/${props.courceId}/students/AttendeesRecurd`}>ATTENDEES RECORD</Link>
        </div>

        <div className="column">
        <Link to={`/cources/${props.courceId}/SearchStudent`}>SEARCH FOR STUDENT</Link>
        </div>

        <div className="column">
        <Link to={`/cources/${props.courceId}/studentInformation`}>STUDENTS INFORMATION</Link>
        </div>
        </div>
        <section className="S">
        <Link to={`/cources`}>Back</Link>
        </section>
        </div>




    )
}

export default OptionPage; 