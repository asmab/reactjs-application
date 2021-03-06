import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import toastr from 'toastr'
import * as patientAction from '../../action/PatientAction'
import PatientList from './PatientList'

export class PatientListContainer extends React.Component {

    constructor() {
        super()

        this.state = {selectedPatientId: undefined}

        this.handleAddPatient = this.handleAddPatient.bind(this)
        this.handleEditPatient = this.handleEditPatient.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRowSelect = this.handleRowSelect.bind(this)
        this.handleAddPrescription = this.handleAddPrescription.bind(this)
    }

    componentDidMount() {
        this.props.action.getPatientsAction()
            .catch(error => {
                toastr.error(error)
            })
    }

    handleAddPatient() {
        this.props.history.push('/patient')
    }

    handleEditPatient() {
        const selectedPatientId = this.state.selectedPatientId
        if (selectedPatientId) {
            this.setState({selectedPatientId: undefined})          
            this.props.history.push(`/patient/${selectedPatientId}`)
        }        
    }

    handleDelete() {
        const selectedPatientId = this.state.selectedPatientId

        if (selectedPatientId) {
            this.setState({selectedPatientId: undefined})                      
            this.props.action.deletePatientAction(selectedPatientId)
                .catch(error => {
                    toastr.error(error)
                })
        }
    }

    handleAddPrescription() {
        const selectedPatientId = this.state.selectedPatientId
        if (selectedPatientId) {
            this.setState({selectedPatientId: undefined})          
            this.props.history.push(`/patient-prescription/${selectedPatientId}`)
        } 
    }

    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedPatientId: row.id})
        }
    }

    render() {
        const { patients } = this.props

        if (!patients) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h2>List of patients</h2>                        
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-submit"
                                onClick={this.handleAddPatient}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-warning ml-2"
                                onClick={this.handleEditPatient}                                
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>                                

                            <button
                                type="button"
                                className="btn btn-danger ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>

                            <button
                                type="button"
                                className="btn btn-submit ml-2"
                                onClick={this.handleAddPrescription}
                            >
                                <i className="fa fa-plus" aria-hidden="true" onClick={this.handleAddPrescription}/> Add prescription
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <PatientList patients={patients} handleRowSelect={this.handleRowSelect} handleAddPatient={this.handleAddPatient}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    patients: state.patientsReducer.patients
})

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(patientAction, dispatch)

})

PatientListContainer.propTypes = {
    patients: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientListContainer)