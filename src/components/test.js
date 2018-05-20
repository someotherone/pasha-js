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
      concentration: event.target.concentration.value,
      danger: Math.floor((Math.random() * 4) + 1),
      Ph: event.target.Ph.value,
      Ep: event.target.Ep.value,
      F: event.target.F.value,
      Ц: event.target.Ц.value,
      X1: event.target.X1.value,
      X2: event.target.X2.value,
      X3: event.target.X3.value
    }
    this.setState(prevState => ({
      subs: [ ...prevState.subs, newElement ],
      sum: prevState.sum + (newElement.num * 14.6),
      name: ''
    }))
    event.target.name.value = ''
    event.target.count.value = ''
    event.target.concentration.value = ''
    event.target.Ph.value = ''
    event.target.Ep.value = ''
    event.target.F.value = ''
    event.target.Ц.value = ''
    event.target.X1.value = ''
    event.target.X2.value = ''
    event.target.X3.value = ''
    event.preventDefault()
  }

  renderList (objectData) {
    return (
      <tr key={objectData.value}>
        <td>{objectData.value}</td>
        <td>{objectData.danger}</td>
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
        return <WaterComp subs={this.state.subs} />
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
                <input type='text' className='form-control'placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control'placeholder='Count' name='count' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' placeholder='concentration' name='concentration' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='Ph' placeholder='Ph' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='Ep' placeholder='Ep' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='F' placeholder='F' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='Ц' placeholder='Ц' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='X1' placeholder='X1' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='X2' placeholder='X2' />
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' name='X3' placeholder='X3' />
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
        <div className='row'>
          <div className='col-3' />
          <div className='col-9'>Збиток: {this.state.sum / 2.1456}</div>
        </div>
      </div>
    )
  }
}
