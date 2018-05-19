import React, { Component } from 'react'

export default class AtmosTable extends Component {
  renderResult (objectData) {
    return (
      <tr key={objectData.value}>
        <td>{objectData.value}</td>
        <td>{objectData.concentration / 30}</td>
        <td>{objectData.num}</td>
        <td>{objectData.num}</td>
        <td>{objectData.num}</td>
        <td>{objectData.num}</td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Пробит</th>
            <th>Риск</th>
            <th>Запас</th>
            <th>Добавки</th>
            <th>Риск (ХВЗ)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.subs.map(this.renderResult)}
        </tbody>
      </table>
    )
  }
}
