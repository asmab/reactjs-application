import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const PatientForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="firstname"
                label="Name"
                placeholder="Patient name"
                component={FieldInput}
            />

            <Field
                type="email"
                name="email"
                label="Email address"
                placeholder="Email"
                component={FieldInput}
            />
            <Field
                type="date"
                name="birthday"
                label="Date of birth"
                placeholder="Date of birth"
                component={FieldInput}
            />

            <Field
                type="text"
                name="phoneNumber"
                label="Phone Number"
                placeholder="Phone number"
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Required';
    }

    if (!values.lastname) {
        errors.lastname = 'Required';
    }

    if (!values.birthday) {
        errors.birthday = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
    }

    return errors;
};



PatientForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'PatientForm',
    validate
})(PatientForm);
