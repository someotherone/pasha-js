import React, { Component } from 'react'
import EarthComp from './Earth'
import AirComp from './Air.js'
import WaterComp from './Water'

export default class TestClass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      subs: [],
      sum: 0,
      tag: 0,
      name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleA = this.handleA.bind(this)
    this.handleE = this.handleE.bind(this)
    this.handleW = this.handleW.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({name: event.target.value})
  }

  handleA () {
    this.setState({tag: 1})
  }

  handleE () {
    this.setState({tag: 0})
  }

  handleW () {
    this.setState({tag: 2})
  }

  handleDelete (event) {
    this.state.subs.forEach((element, index) => {
      if (element.value === this.state.name) {
        let newSubs = this.state.subs
        newSubs.splice(index, 1)
        this.setState({subs: newSubs, name: ''})
      }
    })
    event.preventDefault()
  }

  handleSubmit (event) {
    this.state.subs.forEach((element, index) => {
      if (element.value === this.state.name) {
        let newSubs = this.state.subs
        newSubs.splice(index, 1)
        this.setState({subs: newSubs, name: ''})
      }
    })
    let newElement = {
      value: event.target.name.value,
      num: event.target.count.value,
      concentration: event.target.concentration.value
    }
    this.setState(prevState => ({
      subs: [ ...prevState.subs, newElement ],
      sum: prevState.sum + (newElement.num * 14.6),
      name: ''
    }))
    event.target.name.value = ''
    event.target.count.value = ''
    event.target.concentration.value = ''
    event.preventDefault()
  }

  renderList (objectData) {
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

  renderResult () {
    switch (this.state.tag) {
      case 0:
        return <EarthComp subs={this.state.subs} />
      case 1:
        return <AirComp subs={this.state.subs} />
      case 2:
        return <WaterComp />
      default:
        return <EarthComp subs={this.state.subs} />
    }
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
                <input type='text' className='form-control' id='name' name='name' value={this.state.name} onChange={this.handleChange} />
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
              <input type='button' className='inline' onClick={this.handleDelete} value='Delete' />
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
            <div>Total price: {this.state.sum}</div>
            <button className='col-4' onClick={this.handleA}>Air</button>
            <button className='inline col-4' onClick={this.handleW}>Water</button>
            <button className='inline col-4' onClick={this.handleE}>Earth</button>
          </div>
          <div className='col-9 float-right'>
            {this.renderResult()}
          </div>
        </div>
      </div>
    )
  }
}
