import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

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
        <button onTouchEnd={(e) => this.click(e)} type="button">
          根目录
        </button>
      </div>
    )
  }
}

export default disk
