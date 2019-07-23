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
import Footer from './Footer';
import AttendeesIndex from './Attendees/AttendeesIndex'
import AttendeesCreate from './Attendees/AttendeesCreate'
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
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute  user={user} exact path='/students' render={() => (
            <StudentIndex user={user} alert={this.alert}/>
          )}/>
          <AuthenticatedRoute  user={user}  exact path='/students/:id' render={(props) => (
            <StudentShow user={user} studentId={props.match.params.id}/>
          )}/>

          <AuthenticatedRoute  user={user} exact path='/create' render={() => (
            <StudentCreate user={user} />
          )}/>
         
         <AuthenticatedRoute  user={user} exact path='/students/:id/edit' render={(props) => (
            <StudentEdit user={user} />
          )}/>
          <AuthenticatedRoute  user={user} exact path='/students/:id/attendees' render={(props) => (
            <AttendeesIndex user={user}  studentId={props.match.params.id}/>
          )}/>
         <AuthenticatedRoute  user={user} path='/students/:id/attendees/create' render={() => (
            <AttendeesCreate user={user} />
          )}/>

          <Route  user={user} exact path='/' render={() => (
              <Home />
          )}/>
        
          {/* FOOTER SECTION */}
          <Footer/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
