import React from 'react'
import propTypes from 'prop-types';
import "./Greet.css";
import logo from '../logo.svg';
//used rfce here
// function Greet(props) {
//   console.log(props.firstName);
//   return (
//     <div>
//         <h1>
//         Greet ,This is the Functional Component - {props.firstName} - {props.lastName}
//         </h1>
//     </div>
//   )
// }

// export default Greet
//general
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//          Greet ,This is the Functional Component - {props.firstName} - {props.lastName}
//        </h1>
//     </div>
//   )
// }


// const Greet = ({firstName,lastName}) => {
//   console.log(firstName);
//   return (
    
//     <div>
//       <h1>
//          Greet ,This is the Functional Component - {firstName} - {lastName} 
//        </h1>
//     </div>
//   )
// }

const Greet = (props) => {
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

Greet.propTypes={
  empid : propTypes.number,
  ename : propTypes.string.isRequired,
  eage : propTypes.number,
  eimg : propTypes.any
}
Greet.defaultProps ={
  emid : 143,
  ename : "New agent",
  eage : 23
}
export default Greet