import React from 'react'
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


const Greet = ({firstName,lastName}) => {
  firstName="Mahadev";
  console.log(firstName);
  return (
    
    <div>
      <h1>
         Greet ,This is the Functional Component - {firstName} - {lastName} 
       </h1>
    </div>
  )
}
export default Greet