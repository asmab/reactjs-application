import React from 'react'
import { Router as Router, Route, Switch } from 'react-router-dom'
import Home from './landing/Home'
import PatientListContainer from './patient/PatientListContainer' 
import AddOrEditPatientContainer from './patient/AddOrEditPatientContainer'
import PrescriptionContainer from './patient/PrescriptionContainer'
import createBrowserHistory from 'history/createBrowserHistory'
import HeaderNavContainer from './landing/HeaderNavContainer'

const history = createBrowserHistory()

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
                        <Route path="/patient-prescription/:id" component={PrescriptionContainer} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App