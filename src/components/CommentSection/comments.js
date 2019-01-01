import React from 'react'
import './comments.css'

function Comments(props) {
    return (
        <div className='commentsDiv'>
            <span className='commentUser'>{props.comments.username}</span> <span className='commentText'>{props.comments.text}</span>
        </div>
    )
}

export default Comments;
