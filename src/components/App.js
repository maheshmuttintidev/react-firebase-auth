import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import UpdateProfile from './UpdateProfile'
import ForgotPassword from './ForgotPassword'
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Layout from './Layout'

export default function App() {
    return (
      <Layout>
        <Container 
        className="d-flex align-items-center justify-content-center my-container"
        style={{minHeight: "100vh"}}
        >
            <div className="w-100" style={{maxWidth: "400px"}}>
              <AuthProvider>  
                <Router>
                  <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/update-profile" component={UpdateProfile} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                  </Switch>
                </Router>
              </AuthProvider>
            </div>
          </Container>
        </Layout>
    );
}
