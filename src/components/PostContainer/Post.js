import React, {useState} from 'react'
import like from './img/likeandcomment.PNG'
import CommentMap from '../CommentSection/commentMap.js'
import './Post.css'


function Post(props) {

    const [value, setValue] = useState('')
    const handleChange = (e) => setValue(e.target.value)
    const [commentFlag, setCommentFlag] = useState(false)

    const handleComment = (e) => {
        e.preventDefault()
        props.post.comments.push({'username': 'conner', 'text': value})
        if(e) {
            setCommentFlag(true)
            setValue('')
        } else if (commentFlag === true) {
            setCommentFlag(false)
        }
    }

    const [count, setCount] = useState(props.post.likes)
    const [likeFlag, setLikeFlag] = useState(false)
    const [icon, setIcon] = useState(like)

    const likePost = () => {
        if(likeFlag === true) {
            setLikeFlag(false)
            setCount(count - 1)
        } else {
            setLikeFlag(true)
            setCount(count + 1)
        }
    }

    return (
        <div className='masterDiv'>
            <div className='containerDiv'>
                <h4 className='headerH4'><img className='thumbnail' src={props.post.thumbnailUrl} alt='header thumbnail'/>{props.post.username}</h4>
                    <img className='image' src={props.post.imageUrl} alt='user post' />
                    <img className='likeandcommentIcons' src={icon} alt='like button' onClick={likePost} />
                    <p className='likes'>{count} likes</p>  
                    <CommentMap
                    comments={props.post.comments}
                    /> 
                    <form className='commentsForm' onSubmit={handleComment}>
                    <input
                    className='commentsInput'
                    type='text'
                    placeholder='Add a comment...'
                    value={value}
                    onChange={handleChange}
                    />    
                    </form>    
            </div>
        </div>
    )
}


export default Post