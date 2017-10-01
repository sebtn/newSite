import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Page extends Component {
  render() {
    return (
      <div className="main-container">
        <h2 className="content">
          i'm Sebastian, Freelance JavaScript Developer. <br /> 
          i have love for minimal web design and modular 
          building blocks using JS frameworks. <br />
          i code lean, fast and responsive user experiences, which can 
          help your product be as great as you imagine it. <br />
          <a  href="mailto:sdebedout@gmail.com">Contact me </a>
          <div className="logo">
            <h2>--Made by Seb--</h2>
          </div>
        </h2>        
      </div>
    )
  }
}

export default connect()(Page)