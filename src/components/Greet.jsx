import React from 'react'
//used rfce here
// function Greet(props) {
//   return (
//     <div>
//         <h1>
//         Greet ,This is the Functional Component - {props.firstName} - {props.lastName}
//         </h1>
//     </div>
//   )
// }

// export default Greet

// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//          Greet ,This is the Functional Component - {props.firstName} - {props.lastName} 
//        </h1>
//     </div>
//   )
// }
const Greet = ({firstName,lastName}) => {
  return (
    <div>
      <h1>
         Greet ,This is the Functional Component - {firstName} - {lastName} 
       </h1>
    </div>
  )
}
export default Greet