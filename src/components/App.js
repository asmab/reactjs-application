import React from 'react';
import { Router as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import PatientListContainer from './patient/PatientListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditPatientContainer from './patient/AddOrEditPatientContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default



const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/patients" component={PatientListContainer} />
                        <Route exact path="/patient" component={AddOrEditPatientContainer} />
                        <Route path="/patient/:id" component={AddOrEditPatientContainer} />
                        <Route path="/about" component={About} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;