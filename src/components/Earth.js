import React, { Component } from 'react'

export default class EarthTable extends Component {
  renderResult (objectData) {
    return (
      <tr key={objectData.value}>
        <td>{objectData.value}</td>
        <td>{objectData.concentration / 30}</td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Danger</th>
          </tr>
        </thead>
        <tbody>
          {this.props.subs.map(this.renderResult)}
        </tbody>
      </table>
    )
  }
}
