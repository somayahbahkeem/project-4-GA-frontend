import React from 'react';
import {Link} from 'react-router-dom';
import "./AttendeesRecurd.css";

const AttendeesRecurd = () => {
    return(
        <div className="AttendeesRecurd">
          <h6>Attendees Recurd</h6>
          <Link to={`/optionPage/:cource_id`}><button>Back</button></Link>
        </div>
    )
}

export default AttendeesRecurd; 