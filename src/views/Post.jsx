import React, { Component } from 'react'

import PostForm from '../components/PostForm'

import api from '../lib/api'

class Post extends Component {
  async onSubmit (post) {

    const payload = await api.createPost(post)

    window.alert(payload.data.post._id)
  }

  render () {
    return (
      <PostForm
        onSubmit={this.onSubmit.bind(this)}
      />
    )
  }
}

export default Post
