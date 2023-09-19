import React from 'react'
import "./Form.css"
import Button from './Button'
import Input from './Input'
const Form = () => {
  return (
    <div>
        <br />
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Button/>
        {/* <input type="text" className='text' placeholder='Enter Text' />
        <br />
        <br />
        <input type="text" className='text' placeholder='Enter Text'/>
        <br />
        <br />
        <button type='submit'>Submit</button> */}
    </div>
  )
}

export default Form