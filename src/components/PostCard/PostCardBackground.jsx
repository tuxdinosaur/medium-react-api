import React from 'react'

import styles from './index.module.css'

function PostCardBackground (props) {
  return (
    <img
      className={`bd-placeholder-img card-img-top ${styles.cardImgTop}`}
      width='100%'
      height='225'
      src={props.img}
      alt={props.alt}
    />
  )
}

export default PostCardBackground
