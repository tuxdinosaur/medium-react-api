import React from 'react'

import PostCard from '../components/PostCard'
import PostCardButtons from '../components/PostCard/PostCardButtons'
import { Link } from 'react-router-dom'

function PostList (props) {
  return (
    <div className='row'>
      {
        props.list.map((post, index) => (
          <Link
            key={post.id || `post-${index}`}
            className='col-md-7'
            to={`/post-detail/${post.id}`}
          >
            <PostCard
              title={post.title}
              img={post.image}
              text={post.text}
              date={post.date}
              readTime={post.readTime}
              author={post.author}
            >
              <PostCardButtons
                edit={post.edit}
                view={post.view}
              />
            </PostCard>
          </Link>
        ))
      }
    </div>
  )
}

export default PostList
