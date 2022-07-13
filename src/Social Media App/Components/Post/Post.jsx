import React from 'react'
import image4 from '../../asserts/Images/ls2.jpg';
import like from '../../asserts/Images/like.png'
import heart from '../../asserts/Images/heart.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Style.css'
function Post({post}) {
    console.log(post)
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={image4} alt="" className="postProfileImage" />
                    <span className="postUserName">vijay kumar</span>
                    <span className="postDate">5days ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon className="postTopRightIcon"/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postCenterText">hey i am vijay kumar :)</span>
                <img src={image4} alt="" className="postCenterImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={like} alt="" className="postLikeImage" />
                    <img src={heart} alt="" className="postHeartImage" />
                    <span className="postLikeCount">32 people like it.</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentCount">32 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post