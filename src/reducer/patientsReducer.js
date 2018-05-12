import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const patientsReducer = (state = initialState.patientsReducer, action) => {
    switch(action.type) {
        case ActionType.GET_PATIENTS_RESPONSE: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.patients into a new array.
            // The return object is a copy of state and overwrites the state.patients with a fresh clone of action.patients
            return {
                ...state, 
                patients: _.assign(action.patients)
            };
        }


        default: { return state; }
    }
};



export default patientsReducer;