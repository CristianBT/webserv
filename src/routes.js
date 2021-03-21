import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './auth';
import Login from './paginas/Login';
import Dashboard from './paginas/Dashboard';
import Logout from './paginas/Logout';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/admin" component={Dashboard} />
            <Route exact path="/logout" component={Logout} />

        </Switch>
    </Router>

);
export default Routes;