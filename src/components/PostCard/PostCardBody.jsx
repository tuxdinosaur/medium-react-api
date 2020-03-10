import React from 'react'

import styles from './index.module.css'

function PostCardBody (props) {
  return (
    <div className={`card-body ${styles.cardBody}`}>
      <h5 className='card-title font-weight-bold m-0'>
        {props.title}
      </h5>
      <div id='date'>
        <small className='text-muted'>
          {props.date}
        </small>
      </div>
      <p className='card-text'>
        {props.text}
      </p>
      <div className='d-flex justify-content-between align-items-end'>
        <small className='text-muted'>
          {props.readTime}
        </small>
        <small className='text-muted'>
          {props.author}
        </small>
      </div>
    </div>
  )
}

export default PostCardBody
