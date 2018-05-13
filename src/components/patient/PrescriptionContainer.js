import React, { Component } from 'react'
import axios from 'axios'
const API_URL = 'https://fest-searcher.herokuapp.com/api/fest/s'
import Medications from './Medications'
import toastr from 'toastr'


class PrescriptionContainer extends React.Component {

    constructor() {
        super();

        this.state = {
          query: '',
          results: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange() {
        this.setState({
          query: this.search.value
        }, () => {

          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
              this.getInfo()
            }
          }

        })
    }
    
    handleSubmit() {
/*
            this.props.action.savePrescription(medications)
            .then(() => {
                toastr.success('Prescription saved');
                this.props.history.push('/patients');
            }).catch(error => {
                toastr.error(error);
            }); */

    }

  getInfo () {
    axios.get(`${API_URL}/${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data                         
        })
      })
  }

  render() {
    return (
      <div className="prescription-class">
        <h2>PatientSky medications Searcher ...</h2>

        <form onSubmit={this.handleSubmit()}>
          <input
            className="search-input"
            placeholder="Search for ATC nr, ATC name, medication name or substance name..."
            ref={input => this.search = input}
            onChange={this.handleInputChange} />

          <Medications results={this.state.results} />

          <div className="submit-btn-class">
            <button type="submit" className="btn btn-submit"> Submit </button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default PrescriptionContainer