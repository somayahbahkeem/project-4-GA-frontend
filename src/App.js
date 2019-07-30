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
import StudentPage from './StudentPage'
import Company from './Company'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import OptionPage from './OptionPage'
import StudentInformation from './StudentInformation'
import SearchStudent from './SearchStudent'
import AttendeesRecurd from './AttendeesRecurd'
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
            <StudentCreate alert={this.alert} user={user} courcesId={props.match.params.cources_id}/>
          )}/>
         
         <AuthenticatedRoute  user={user} exact path='/cources/:cources_id/students/:id/edit' render={(props) => (
            <StudentEdit user={user} studentId={props.match.params.id} courcesId={props.match.params.cources_id}/>
          )}/>
{/* #Cources Route-------- */}
         <AuthenticatedRoute  user={user} exact path='/cources' render={() => (
            <CourcesIndex user={user} alert={this.alert}/>
          )}/>

          <AuthenticatedRoute  user={user}  exact path='/cources/:id' render={(props) => (
            <CourcesShow user={user} coursId={props.match.params.id}/>
          )}/>

          <AuthenticatedRoute  user={user} exact path='/cources/create' render={() => (
            <CourcesCreate user={user} />
          )}/>
         
         <AuthenticatedRoute  user={user} exact path='/cources/:id/edit' render={(props) => (
            <CourcesEdit user={user} coursId={props.match.params.id}/>
          )}/>

{/* #Attendees Route-------- */}
          <AuthenticatedRoute  user={user} exact path='/cources/:cources_id/students/:id/attendees' render={(props) => (
            <AttendeesIndex user={user}  studentId={props.match.params.id} courcesId={props.match.params.cources_id}/>
          )}/>
         <AuthenticatedRoute  user={user} path='/cources/:cource_id/students/:student_id/attendees/create' render={(props) => (
            <AttendeesCreate user={user} courceId={props.match.params.cource_id} studentId={props.match.params.student_id}/>
          )}/>
         <AuthenticatedRoute  user={user} path='/cources/:cource_id/students/:student_id/attendees/:id/edit' render={(props) => (
            <AttendeesEdit user={user}  courceId={props.match.params.cource_id} studentId={props.match.params.student_id} id={props.match.params.id}/>
         
          )}/>
          <AuthenticatedRoute  user={user} path='/students/:id/attendees/show' render={() => (
            <AttendeesShow user={user} />
          )}/>
{/* #Home Route-------- */}
          <Route   user={user} exact path='/' render={() => (
          <Home user={user}/>
          )}/>
{/* #StudentPage Route-------- */}
          <AuthenticatedRoute   user={user} exact path='/studentPage' render={() => (
          <StudentPage user={user}/>
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
{/* #StudentInformation Route-------- */}
          <AuthenticatedRoute  user={user} exact path='/cources/:cource_id/studentInformation' render={(props) => (
              <StudentInformation alert={this.alert} user={user} courceId={props.match.params.cource_id} studentId={props.match.params.student_id}/>
          )}/>
{/* #SearchStudent Route-------- */}
          <Route  user={user} exact path='/SearchStudent' render={() => (
              <SearchStudent/>
          )}/>
 {/* #AttendeesRecurd Route-------- */}
 <AuthenticatedRoute user={user} exact path='/cources/:cource_id/students/AttendeesRecurd' render={(props) => (
              <AttendeesRecurd user={user}  courceId={props.match.params.cource_id}/>
          )}/>                   
{/* #OptionPage Route-------- */}
          <Route   user={user} exact path='/optionPage/:cource_id' render={(props) => (
            <OptionPage user={user} courceId={props.match.params.cource_id}/>
          )}/>
        
          {/* FOOTER SECTION */}
          <Footer/>
        </main>
      </React.Fragment>
    )
  }
}

export default App
