import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import StudentIndex from './student/StudentIndex'
import StudentShow from './student/StudentShow'
import StudentCreate from './student/StudentCreate'
import StudentEdit from './student/StudentEdit'
import Home from './Home';
import Company from './Company'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import AttendeesIndex from './Attendees/AttendeesIndex'
import AttendeesCreate from './Attendees/AttendeesCreate'
import AttendeesEdit from './Attendees/AttendeesEdit'
import AttendeesShow from './Attendees/AttendeesShow'
import CourcesIndex from './cources/CourcesIndex'
import CourcesCreate from './cources/CourcesCreate'
import CourcesEdit from './cources/CourcesEdit'
import CourcesShow from './cources/CourcesShow'
class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
{/* #User Route-------- */}
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
{/* #Student Route-------- */}
          <AuthenticatedRoute  user={user} exact path='/cources/:cources_id/students' render={(props) => (
            <StudentIndex user={user} alert={this.alert} courcesId={props.match.params.cources_id}/>
          )}/>

          <AuthenticatedRoute  user={user}  exact path='/students/:id' render={(props) => (
            <StudentShow user={user} studentId={props.match.params.id}/>
          )}/>

          <AuthenticatedRoute  user={user} exact path='/cources/:cources_id/students/create' render={(props) => (
            <StudentCreate user={user} courcesId={props.match.params.cources_id}/>
          )}/>
         
         <AuthenticatedRoute  user={user} exact path='/students/:id/edit' render={() => (
            <StudentEdit user={user} />
          )}/>
{/* #Cources Route-------- */}
         <AuthenticatedRoute  user={user} exact path='/cources' render={() => (
            <CourcesIndex user={user} alert={this.alert}/>
          )}/>

          <AuthenticatedRoute  user={user}  exact path='/cources/:id' render={(props) => (
            <CourcesShow user={user} studentId={props.match.params.id}/>
          )}/>

          <AuthenticatedRoute  user={user} exact path='/cources/create' render={() => (
            <CourcesCreate user={user} />
          )}/>
         
         <AuthenticatedRoute  user={user} exact path='/cources/:id/edit' render={() => (
            <CourcesEdit user={user} />
          )}/>

{/* #Attendees Route-------- */}
          <AuthenticatedRoute  user={user} exact path='/students/:id/attendees' render={(props) => (
            <AttendeesIndex user={user}  studentId={props.match.params.id} />
          )}/>
         <AuthenticatedRoute  user={user} path='/students/:id/attendees/create' render={() => (
            <AttendeesCreate user={user} />
          )}/>
         <AuthenticatedRoute  user={user} path='/attendees/:id/edit' render={(props) => (
            <AttendeesEdit user={user}  id={props.match.params.id}/>
         
          )}/>
          <AuthenticatedRoute  user={user} path='/students/:id/attendees/show' render={() => (
            <AttendeesShow user={user} />
          )}/>
{/* #Home Route-------- */}
          <Route   user={user} exact path='/' render={() => (
              <Home user={user}/>
          )}/>
{/* #Company Route-------- */}
          <AuthenticatedRoute  user={user} exact path='/company' render={() => (
            <Company user={user} />
          )}/>
{/* #About Route-------- */}
           <Route  user={user} exact path='/about' render={() => (
              <About/>
          )}/>
{/* #Contact Route-------- */}
           <Route  user={user} exact path='/contact' render={() => (
              <Contact/>
          )}/>
        
          {/* FOOTER SECTION */}
          <Footer/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
