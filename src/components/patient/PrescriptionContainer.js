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
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default PrescriptionContainer;

