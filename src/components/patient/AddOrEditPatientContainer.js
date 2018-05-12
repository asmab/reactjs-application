import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as patientAction from '../../action/PatientAction';
import PatientForm from './PatientForm'; // eslint-disable-line import/no-named-as-default


export class AddOrEditPatientContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getPatientAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const patient = {
            id: values.id,
            firstname: values.firstname,
            lastname: values.lastname,
            birthday: values.birthday,
            email: values.email,
            phoneNumber: values.phoneNumber
        };

        this.props.action.savePatientAction(patient)
            .then(() => {
                toastr.success('Patient saved');
                this.props.history.push('/patients');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/patients');
    }



    render() {
        const { initialValues } = this.props;
        console.log('this.props ', this.props)
        console.log('initialValues', initialValues)

        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        console.log('heading ', heading)
        return (
            <div className="container">
                <PatientForm
                    heading={heading}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const patientId = ownProps.match.params.id; //from the path '/patient/:id'

    if (patientId && state.selectedPatientReducer.patient && patientId === state.selectedPatientReducer.patient.id) {
        return {
            initialValues: state.selectedPatientReducer.patient
        };
    }
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...patientAction }, dispatch)
});



AddOrEditPatientContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditPatientContainer);
