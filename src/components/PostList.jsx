import axios from 'axios'
import React, { Component } from 'react'

export class PostList extends Component {
    constructor(props){
        super(props)
        this.state=({
            posts:[]
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
        }
        )
    }
    render() {
    return (
      <div>
        <h1>Post List</h1>
        {this.state.posts.map((post)=><h2 key={post.id}>{post.title}</h2>)}
      </div>
    )
  }
}

export default PostList