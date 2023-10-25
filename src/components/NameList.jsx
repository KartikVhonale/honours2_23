import React from 'react'

function NameList() {
    const names=['Kartik','Sumit','Pratham','Ajit','Sujal','Yash'];
    const nameList = names.map((name,index) => 
    <h2 key={index}>
    {name}
    </h2>);
    console.log(nameList);
    return (
    <div>
        {nameList}
    </div>
  )
}

export default NameList