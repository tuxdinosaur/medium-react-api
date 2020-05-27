import React, { useState, useEffect } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

import api from '../lib/api'

function Home () {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = window.sessionStorage.getItem('authorization')

    if (token) {
      async function getPosts () {
        const payload = await api.getPosts()

        //if (post.length !== payload.data.post.length) setPost(payload.data.post)

        setPost(payload.data.posts)
        setLoading(false)
      }

      getPosts()
    }
  }, [post, loading])

  if (loading) return <AppLoading />

  return <PostList list={post} />
}

export default Home
