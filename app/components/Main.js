import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="logo">Seb</h1>
        <h2 className="content">
          I'm Sebastian, Freelance JavaScript developer. <br /> 
          I have love for all things minimal and modular 
          building blocks using JS frameworks.
          <br />
          Full disclosure: I sing to my cat when we are alone 
          and I'm hooked on caffeine.
          <br />
          <a href="mailto:sdebedout@gmail.com">Contact me </a>
        </h2>        
      <img src="/home/seb" alt=""/>
      </div>
    )
  }
}

export default connect()(Main)