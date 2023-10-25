import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Form2 extends Component {
  constructor(props){
    super(props);
    this.state={
        userName:'',
        comment:''
    }
  }
  handleUSerNameChange=(event)=>{
    this.setState({
        userName:event.target.value
    })
  }
  handleComment=(event)=>{
    this.setState({
        comment:event.target.value
    })
  }
  handleSubmit=(event)=>{
    alert(`${this.state.userName}${this.state.comment}`);
    event.preventDefault();  
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <label>
            UserName:
         </label>
         <input type="text" value={this.state.userNmae} onChange={this.handleUSerNameChange}/>
          <label>Comments:</label>
          <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
          <button type='submit' >Submit</button>
      </form>
    )
  }
}
