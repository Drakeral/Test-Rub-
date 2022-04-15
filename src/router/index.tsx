import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SettingsPage from '../pages/SettingsPage';
import NavBar from '../components/NavBar/index';

const Routers = () => {
  return (
    <Router>
        <Switch>
                <Route path="/about" component={AboutPage}/>
                <Route path="/settings" component={SettingsPage}/>
                <Route path="/" component={HomePage}/>
                {/*Scan from top to bottom, so need to have the base '/' url at the bottom */}
        </Switch>
    </Router>
  )
}

export default Routers;