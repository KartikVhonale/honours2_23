import React, { Component } from 'react'
import propTypes from 'prop-types';

class Welcome extends Component {
  static propTypes={
    id : propTypes.number,
    names : propTypes.string.isRequired,
    lastnames : propTypes.string,
    eimg : propTypes.any
  }
  
  static defaultProps ={
    id : 143,
    names : "New User",
    eage : 23
  }
  render() {
    
    return (
      <div>
      <h3>
        Welcome, {this.props.names} {this.props.lastnames} ,{this.props.id}
      </h3>
    </div>
    )
  }
  
 
}
export default Welcome
