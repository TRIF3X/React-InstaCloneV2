import React from 'react'
import './comments.css'

function Comments(props) {
    return (
        <div className='commentsDiv'>
            {props.comments.username} {props.comments.text}
        </div>
    )
}

export default Comments;
