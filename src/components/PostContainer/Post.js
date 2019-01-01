import React, {useState} from 'react'
import like from './img/likeandcomment.PNG'
import CommentMap from '../CommentSection/commentMap.js'
import './Post.css'


function Post(props) {

    const [value, setValue] = useState('Add a comment...')
    const handleChange = (e) => setValue(e.target.value)

    return (
        <div className='masterDiv'>
            <div className='containerDiv'>
                <h4 className='headerH4'><img className='thumbnail' src={props.post.thumbnailUrl} alt='header thumbnail'/>{props.post.username}</h4>
                    <img className='image' src={props.post.imageUrl} alt='user post' />
                    <img className='likeandcommentIcons' src={like} alt='like button' />
                    <p className='likes'>Likes</p>  
                    <CommentMap
                    comments={props.post.comments}
                    />   
                    <input
                    className='commentsInput'
                    type='text'
                    value={value}
                    onChange={handleChange}
                    />      
            </div>
        </div>
    )
}


export default Post