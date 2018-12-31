import React from 'react'
import './Post.css'

function Post(props) {
    return (
        <div className='postContainer'>
            {props.post.username}
        </div>
    )
}


export default Post