import React from 'react'
import propTypes from 'prop-types';
import "./Greet.css";
import logo from '../logo.svg';
const Register = (props) => {
  return (
    <div className='new'>
         
      <h4>Table of {props.ename}</h4>   
      <table border={2}>
        <tr>
          <td>Name</td>
          <td>{props.ename}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{props.eage}</td>
        </tr>
        <tr>
          <td>ID</td>
          <td>{props.emid}</td>
        </tr>
        <tr>
          <td>Order</td>
          <td><img src={props.eimg} alt="" /></td>
        </tr>
      </table>
    </div>
  )
}
Register.propTypes={
  empid : propTypes.number,
  ename : propTypes.string.isRequired,
  eage : propTypes.number,
  eimg : propTypes.any
}
Register.defaultProps ={
  emid : 143,
  ename : "New agent",
  eage : 23,
  eimg: logo
}
export default Register