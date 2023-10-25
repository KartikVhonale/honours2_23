import React, { useState } from 'react'

const Counter4 = () => {
  const [Name, setName]= useState({FirstName:'',lastName:''});
  return (
    <div>
        <input type='text' value={Name.FirstName} onChange={e=> setName({...Name,FirstName:e.target.value})}/>
        <input type='text' value={Name.lastName} onChange={e=> setName({...Name,lastName:e.target.value})}/>
        <h2>Your FirstName is {Name.FirstName}</h2>
        <h2>Your lastName is {Name.lastName}</h2>
        <h2>{JSON.stringify(Name)}</h2>
    </div>
  )
}

export default Counter4