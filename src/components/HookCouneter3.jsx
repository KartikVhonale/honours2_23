import React, { useState } from 'react'

const HookCouneter3 = () => {
  const [items , setItems]= useState([]);
  function addItem(){
    setItems([...items,{
        id:items.length,
        value: Math.floor(Math.random()*10)+1
  }])
  }
  return (
    <div>
    <h1>Spreed Operator</h1>
    <button onClick={addItem}>get new value</button>
    <ul>
        <li>
            {items.map(items=>(<h2 key={items.id}> {items.value}</h2>))}
        </li>
    </ul>
    </div>
  )
}

export default HookCouneter3