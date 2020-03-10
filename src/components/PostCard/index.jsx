import React from 'react'

import PostCardBackground from './PostCardBackground'
import PostCardBody from './PostCardBody'

import styles from './index.module.css'

function PostCard (props) {
  return (
    <div className={`card mb-4 shadow-sm ${styles.card}`}>
      <PostCardBackground
        img={props.img}
      />

      <PostCardBody
        title={props.title}
        text={props.text}
        date={props.date}
        readTime={props.readTime}
        author={props.author}
      >
        {props.children}
      </PostCardBody>
    </div>
  )
}

export default PostCard
