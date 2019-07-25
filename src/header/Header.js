import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    {/* <Link to="/students">Students</Link> */}
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    {/* <Link to="/sign-in">Sign In</Link> */}
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="./">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <img src='http://static1.squarespace.com/static/5a2861f1d74cff16007d5a71/5a306168f9619aace4fa8f3e/5a318e33f9619ac59d31b3e4/1518017516956/Logos_MASTER_General+Assembly.png?format=1500w'height="170px" width="250px"/>
    <nav>
{ user && <span>Welcome, "{user.email.split('@')[0]}"</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)
 
export default Header
