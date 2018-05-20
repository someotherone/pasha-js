import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      X1: 0,
      X2: 0,
      X3: 1,
      X4: 1,
      X5: 0,
      X6: 0,
      X7: 0,
      X8: 0,
      X9: 0,
      X10: 0,
      X11: 0,
      X12: 0,
      X13: 0,
      X14: 0,
      X15: 0,
      X16: 0,
      X17: 0,
      X18: 0,
      X19: 0,
      X20: 0,
      X21: 0,
      X22: 0,
      X23: 0,
      D1: 'Some text',
      D2: '',
      D3: '',
      D4: '',
      D5: '',
      D6: '',
      D7: '',
      D8: '',
      D9: '',
      D10: '',
      D11: '',
      D12: '',
      D13: '',
      D14: '',
      D15: '',
      D16: '',
      D17: '',
      D18: '',
      D19: '',
      D20: '',
      D21: '',
      D22: '',
      D23: ''
    }

    this.renderList = this.renderList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleChange4 = this.handleChange4.bind(this)
    this.handleChange5 = this.handleChange5.bind(this)

  }

  handleChange (event) {
  this.setState({X1: event.target.value})
}

handleChange2 (event) {
this.setState({X2: event.target.value})
}

handleChange3 (event) {
this.setState({X3: event.target.value})
}
handleChange4 (event) {
this.setState({X4: event.target.value})
}
handleChange5 (event) {
this.setState({X4: event.target.value})
}
  renderList () {
    return (
    <div>
    <tr className='row'>
      <td className='col-2'>X1</td>
      <td className='col-8'>{this.state.D1}</td>
      <td className='col-2'><input type='number' className='form-control' name='X1' value={this.state.X1} onChange={this.handleChange}  /></td>
    </tr>
    <tr className='row'>
      <td className='col-2'>X2</td>
      <td className='col-8'>{this.state.D1}</td>
      <td className='col-2'><input type='number' className='form-control' name='X2' value={this.state.X2} onChange={this.handleChange2}  /></td>
    </tr>
    <tr className='row'>
      <td className='col-2'>X3</td>
      <td className='col-8'>{this.state.D1}</td>
      <td className='col-2'><input type='number' className='form-control' name='X3' value={this.state.X3} onChange={this.handleChange3}  /></td>
    </tr>
    <tr className='row'>
      <td className='col-2'>X4</td>
      <td className='col-8'>{this.state.D1}</td>
      <td className='col-2'><input type='number' className='form-control' name='X4' value={this.state.X4} onChange={this.handleChange4}  /></td>
    </tr>
    <tr className='row'>
      <td className='col-2'>ГИМ</td>
      <td className='col-8'>{this.state.D2}</td>
      <td className='col-2'>{((1)*this.state.X1 + (1)*this.state.X2 + (1)*this.state.X3) * this.state.X4}</td>
    </tr>
    </div>
  )
  }

  render () {
    return (
      <div className='container'>
      <table className='table table-hover'>
        <thead>
          <tr className='row'>
            <th className='col-2'>Name</th>
            <th className='col-8 '>Description</th>
            <th className='col-2'>Number</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
      </div>
    )
  }
}
