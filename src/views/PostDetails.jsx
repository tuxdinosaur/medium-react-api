import React, { useState, useEffect } from 'react'

import PostDetailsComponent from '../components/PostDetailsComponent'
import api from '../lib/api'

function PostDetails (props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [alt, setAlt] = useState('')
  const [readTime, setReadTime] = useState(0)
  const { id } = props.match.params

  useEffect(() => {
    async function getPost () {
      const payload = await api.getPost(id)

      console.log(id)

      setTitle(payload.data.post.title)
      setAuthor(payload.data.post.author)
      setImage(payload.data.post.image)
      setAlt(payload.data.post.alt)
      setDescription(payload.data.post.description)
      setReadTime(payload.data.post.readTime)
    }

    getPost()
  },
  [
    id,
    title,
    author,
    description,
    image,
    alt,
    readTime
  ])

  return (
    <PostDetailsComponent
      title= {title}
      author= {author}
      description= {description}
      image= {image}
      alt= {alt}
      readTime= {readTime}
    />
  )
}

export default PostDetails
