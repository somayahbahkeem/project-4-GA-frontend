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
          <table>
             <thead>
               <tr>
                <th>Record</th> 
                <th>Date</th>
                <th>time</th>
                <th>Send</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button>Send</button></td>
              </tr>
            </tbody>
          </table>
          <br/>
                <Link to={`/optionPage/:cource_id`}><button>Back</button></Link>
                <button onClick ={this.printFunction}>Print</button>  

        </div>
    )
}

export default SearchStudent; 