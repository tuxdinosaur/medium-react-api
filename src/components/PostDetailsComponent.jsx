import React from 'react'

function PostDetailsComponent (props) {
  return (
    <div className='container'>
      <h1>
        {props.title}
      </h1>
      <h3>
        {props.readTime}
      </h3>
      <h5>
        {props.author}
      </h5>
      <img
        src={props.image}
        alt={props.alt}
      />
      <p>
        {props.description}
      </p>
    </div>
  )
}

export default PostDetailsComponent
