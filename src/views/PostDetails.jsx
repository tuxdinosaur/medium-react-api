import React, { Component } from 'react'

//import React, { useState, useEffect } from 'react'

import PostDetailsComponent from '../components/PostDetailsComponent'
import api from '../lib/api'

class PostDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title:'',
      author:'',
      image:'',
      alt:'',
      description:'',
      readTime:0
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const payload = await api.getPost(id)

    this.setState({
      title: payload.data.post.title,
      author: payload.data.post.author,
      image: payload.data.post.image,
      alt: payload.data.post.alt,
      description: payload.data.post.description,
      readTime: payload.data.post.readTime
    })
  }

  render () {
    return (
      <PostDetailsComponent
      {...this.state}
      />
    )
  }
}

export default PostDetails
