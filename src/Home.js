import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.css";

const Home = (props) => {

    return (
      <div>
        { !props.user ? (
          <div className="HomeImage">
            <section className="section1HomeImage">
              <Link to="/sign-in"><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLHR9AHL1/user_6.jpg'  height="150px" width="200px"/></Link>
              <h4>STUDENT</h4>
            </section>
            <section className="section2HomeImage">
              <Link to="/sign-in"><img src='https://files.slack.com/files-pri/TA2AHQDQ8-FLQ5RL7NU/user_3.jpg'  height="150px" width="220px"/></Link>
              <h4>TEACHER</h4>
            </section>
          </div>) : <React.Fragment/> }
      </div>
    )
}

export default Home; 