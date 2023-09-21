import React from 'react'
import propTypes from 'prop-types';
import "./Greet.css";
import logo from '../logo.svg';
import Button from './Button';
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
    <div>
      {props.children}
      <Button/>
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
  eage : 23,
  eimg: logo
}
export default Greet