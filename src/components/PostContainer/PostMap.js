import React from 'react';
import Post from './Post.js' 

function PostMap(props) {
  return (
    props.data.map(post => {
      return (
      <Post
       post={post}
       key={post.username}
       />
       )
    })
  )
}

export default PostMap;