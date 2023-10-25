import React from 'react'
import './Contact.css'
const Contact = (props) => {
  let class1 = props.check? 'primary':'font1';
  return (
    <div className={class1}>
            This is Font
    </div>
  )
}

export default Contact