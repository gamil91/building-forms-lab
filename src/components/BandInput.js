
import React, { Component } from 'react'

export default class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({name:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({name:''})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}


