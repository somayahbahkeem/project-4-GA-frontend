import React from 'react';
import {Link} from 'react-router-dom';
import "./SearchStudent.css";

const SearchStudent = () => {
    return(
        <div className="SearchStudent">
          
          <br/>
          <form>
           Search For Student: <input type="search" name="q"/>
          <input type="submit"/>
          </form>
          <br/>   
          <Link to={`/optionPage/:cource_id`}><button>Back</button></Link>
        </div>
    )
}

export default SearchStudent; 