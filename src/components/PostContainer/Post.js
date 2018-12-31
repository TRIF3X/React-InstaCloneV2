import React from 'react'
import like from './img/likeandcomment.PNG'
import './Post.css'


function Post(props) {
    return (
        <div className='masterDiv'>
            <div className='containerDiv'>
                <h4 className='headerH4'><img className='thumbnail' src={props.post.thumbnailUrl} alt='header thumbnail'/>{props.post.username}</h4>
                    <img className='image' src={props.post.imageUrl} alt='user post' />
                    <img className='likeandcommentIcons' src={like} alt='like button' />
                    <p className='likes'>Likes</p>           
            </div>
    </div>
    )
}


export default Post