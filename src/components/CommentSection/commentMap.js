import React from 'react'
import Comments from './comments.js'

function CommentMap(props) {
    return (
        props.comments.map(comments => {
            return (
                <Comments
                 comments={comments}
                 />
            )
        })
    )
}

export default CommentMap;