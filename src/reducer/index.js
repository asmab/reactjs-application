import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import patientsReducer from './patientsReducer'
import selectedPatientReducer from './selectedPatientReducer'
import apiReducer from './apiReducer'

export default combineReducers({
    patientsReducer,
    selectedPatientReducer,
    apiReducer,
    form: formReducer    
})
