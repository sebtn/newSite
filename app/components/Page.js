import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Page extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="logo">Seb</h1>
        <h2 className="content">
          i'm Sebastian, Freelance JavaScript developer. <br /> 
          i have love for all things minimal and modular 
          building blocks using JS frameworks.
          <br />
          i code lean UX and adaptive web design, which can help your 
          product be as great as you imagine it.
          <br />
          <a href="mailto:sdebedout@gmail.com">Contact me </a>
        </h2>        
      </div>
    )
  }
}

export default connect()(Page)