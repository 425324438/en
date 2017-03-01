import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

class welCome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 'aa11ss'
    }
    this.click = this.click.bind(this)
  }
  click() {
    browserHistory.push('disk')
  }
  render() {
    const { val } = this.state
    return (
      <div>
        welCome
        <input type="text" defaultValue={val} />
        <br />
        <button onTouchTap={(e) => this.click(e)} type="button">
          disk
        </button>
      </div>
    )
  }
}

export default welCome
