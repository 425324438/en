import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class disk extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }
  click() {
    browserHistory.push('/')
  }
  render() {
    return (
      <div>
        disk
        <br />
        <button onTouchTap={(e) => this.click(e)} type="button">
          根目录
        </button>
      </div>
    )
  }
}

export default disk
