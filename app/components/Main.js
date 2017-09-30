import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Page from './Page'
import {mouseBlock} from '../utils/mouseBlock'

class Main extends Component {
  render() {
    return (
      <div className="wrap-container">
        {this.props.children}
        <Page />
      </div>
    )
  }
}

export default connect()(Main)