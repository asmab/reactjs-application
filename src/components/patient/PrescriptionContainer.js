import React, { Component } from 'react'
import axios from 'axios'
const API_URL = 'https://fest-searcher.herokuapp.com/api/fest/s'
import Suggestions from './Suggestions'


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
      <div className="testLess">
        <h2>PatientSky medicines Searcher ...</h2>
        <form>
          <input
            className="search-input"
            placeholder="Search for ATC nr, ATC name, medication name or substance name..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
        </form>
      </div>
    )
  }
}

export default PrescriptionContainer;

