import React, { Component } from 'react'

export default class TestClass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subs: [],
      sum: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeN = this.handleChangeN.bind(this)
    this.handleChangeC = this.handleChangeC.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleChangeN (event) {
    this.setState({num: event.target.value})
  }

  handleChangeC (event) {
    this.setState({concentration: event.target.value})
  }

  handleSubmit (event) {
    let newElement = {
      value: event.target.name.value,
      num: event.target.count.value,
      concentration: event.target.concentration.value
    }
    this.setState(prevState => ({
      subs: [ ...prevState.subs, newElement ],
      sum: prevState.sum + (newElement.num * 14.6)
    }))
    console.log(this.state)
    event.target.name.value = ''
    event.target.count.value = ''
    event.target.concentration.value = ''
    event.preventDefault()
  }

  componentDidMount () {
    console.log(this.state)
  }

  renderList (objectData) {
    console.log(objectData)
    return (
      <tr key={objectData.value}>
        <td>{objectData.value}</td>
        <td>4</td>
        <td>{objectData.num}</td>
        <td>{objectData.concentration}</td>
        <td>{objectData.num / 5}</td>
        <td>{objectData.num * 14}</td>
        <td>{objectData.num}</td>
        <td>{objectData.concentration / 2.5}</td>
        <td>{objectData.num}</td>
      </tr>
    )
  }

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
      <div className='container'>
        <div>Garbege #1</div>
        <hr />
        <div className='row'>
        <div className='col-3'>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' className='form-control' id='name' name='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='count'>Count</label>
          <input type='number' className='form-control' id='count' name='count' />
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Concentration</label>
          <input type='number' className='form-control' id='concentration' name='concentration' />
        </div>
          <input type='submit' value='Submit' />
        </form>
        </div>
        <div className='col'>
          <table className='table table-hover'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Danger</th>
              <th>Count</th>
              <th>Concentration</th>
              <th>ГДВ</th>
              <th>ГДК</th>
              <th>Цена\Кол-во</th>
              <th>Цена</th>
              <th>Норма ГДВ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.subs.map(this.renderList)}
          </tbody>
          </table>
        </div>
        </div>
        <div className='row'>
        <div className='col'>
          Total price: {this.state.sum}
        </div>
          <div className='col-9 float-right'>
            <table className='table table-hover'>
            <thead>
            <tr>
              <th>Name</th>
              <th>Danger</th>
            </tr>
          </thead>
          <tbody>
          {this.state.subs.map(this.renderResult)}
          </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
}
