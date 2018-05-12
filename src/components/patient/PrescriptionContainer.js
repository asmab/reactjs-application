import React, { Component } from 'react'
import axios from 'axios'
const API_URL = 'https://fest-searcher.herokuapp.com/api/fest/s'


export class PatientListContainer extends React.Component {

    constructor() {
        super();

        this.state = {
          query: ''
        }
    }

    componentDidMount() {
      this.getInfo()
    }


  handleInputChange () {

    console.log('this search term', this.search)

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

        console.log('data result ')
        this.setState({
          results: data.data // MusicGraph returns an object named data, 
                             // as does axios. So... data.data                             
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
        <p>{this.state.query}</p>
      </form>
   )
 }
}

export default PatientListContainer

