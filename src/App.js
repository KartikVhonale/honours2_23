import logo from './logo.svg';
import one from './components/one.png'
import './App.css';
import React from 'react';
import Form from './components/Form';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Register from './components/Register';
import NameList from './components/NameList';
import PostList from './components/PostList';
import HookCouneter3 from './components/HookCouneter3';
import Counter4 from './components/Counter4';
import Form2 from './components/Form2';
import Contact from './components/Contact';
import About from './components/About';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
const element=React.createElement('h1',{className:'h1',id:'hello'},'Hello World')
function App() {
  return (
    // using the jsx
    // React.createElement( 'div',{className:'App'},
    // React.createElement('h1',null,'Good Morning'),
    // React.createElement('h2',null,'Have a Nice Day!'),
    // React.createElement('p',{},'Good Bye!'),
    // )

    <div className="App">
      <About/>
       {/* <Contact check={true}/> */}
      {/* <Form2/> */}
      {/* <Counter4/> */}
      {/* <HookCouneter3/> */}
      {/* <PostList/> */}
      {/* <NameList/> */}
      {/* <Welcome names="Kartik" lastnames="Vhonale"/>
      <Welcome names="Sumit" lastnames="Choudhari"/>
      <Welcome names="Pratham" lastnames="Shrivastava"/> */}
      {/* <Register ename="Kartik" eage="19"emid={100}  eimg={logo}/>
      <Register ename="Sujal" eage={19} emid={141} eimg={one}/>
      <Register ename="Pratham"  emid={177} eimg={logo}/>
      <Register/> */}
      {/* <Greet firstName="Kartik" lastName="Vhonale"/>
      <Greet firstName="Sujal" lastName="Agrawal"/>
      <Greet firstName="Pratham" lastName="Shrivastava"/> */}
      {/* <Welcome/> */}
      {/* <Header/>
      <Form/> */}
      {/* <h1>This is parent component !</h1> */}
      {/* <Header/>
      <StName/>
      <Appone/>
      <Footer/> */}
      {/* <h1>Good Morning </h1>
      <h2>Hi everyone !</h2>
  <h3>Kartik is here</h3> */}
    </div>
  );
}
// function Greet() {
//   return(
//     <div>
//       <h1>
//         THis is greet !
//       </h1>
//     </div>
//   )
// }
// function Hello() {
//   return(
//     <div>
//       <h2>Hello everyone</h2>
//     </div>
//   )
// }

const Header = () => {
  return (
    <div>Header</div>
  )
}
const StName = () => {
  return (
    <div>StName</div>
  )
}
const Appone = () => {
  return (
    <div>Appone</div>
  )
} 
const Footer = () => {
  return (
    <div>Footer</div>
  )
}



export default App;
