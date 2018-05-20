import React, { Component } from 'react'

export default class WatherTable extends Component {
  renderResult (objectData) {
    return (
      <tr key={objectData.value}>
        <td>{objectData.value}</td>
        <td>{objectData.Ph / 3}</td>
        <td>{objectData.Ep / 2.123232}</td>
        <td>{objectData.X1 * objectData.X2}</td>
        <td>{objectData.X3 * 4}</td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Риск за окрасом</th>
            <th>Потенциальный риск(Питевая вода)</th>
            <th>Потенциальный риск(Для использования)</th>
            <th>Риск(водный показатель)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.subs.map(this.renderResult)}
        </tbody>
      </table>
    )
  }
}
