import React from 'react'
const Form3 = () => {
  const [username, setUsername] = useState("");
  const [comment, setcomment] = useState("");
  const handleUSerNameChange=(event)=>{
    this.setState({
        userName:event.target.value
    })
  }
  const handleComment=(event)=>{
    this.setState({
        comment:event.target.value
    })
  }
  handleSubmit=(event)=>{
    alert(`${this.state.userName}${this.state.comment}`);
    event.preventDefault();  
  }
  return (
    <div>
    <form

    </div>
  )
}

export default Form3