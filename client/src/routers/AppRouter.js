import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from '../LandingPage'
import Form from '../Form'

export default () => (
    <Router>
        <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/form" component={Form} />
        </Switch>
    </Router>
)