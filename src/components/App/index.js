import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Navigation from '../Navigation'
import * as ROUTES from '../../constants/routes'
import LandingPage from '../Landing'
import SignInPage from '../Sign_In'
import SignUpPage from '../Sign_Out'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'

const App = () => (
    <Router>
        <Navigation />

        <hr />

        <Route path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGNIN} component={SignInPage} />
        <Route path={ROUTES.SIGNUP} component={SignUpPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
    </Router>
)

export default App