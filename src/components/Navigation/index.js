import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import React from 'react'
import * as ROUTES from '../../constants/routes'

const Navigation = () => (
    <div>
        <ul>
            <li>
                    <Link to={ROUTES.SIGNIN}>Sign_In</Link>
            </li>
            <li>
                    <Link to={ROUTES.SIGNUP}>Sign_Up</Link>
            </li>
            <li>
                    <Link to={ROUTES.LANDING}>LANDING</Link>
            </li>
            <li>
                    <Link to={ROUTES.ADMIN}>ADMIN</Link>
            </li>
            <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
        </ul>
    </div>
)

export default Navigation;