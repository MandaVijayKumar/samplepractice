import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Style.css';
import {Posts} from '../../Data/Users.js'

function Feed() {
  console.log('post data are:' , Posts)
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {
          Posts.map(p => <Post key={p.id} post={p}/>)
        }
        
      </div>
    </div>
  )
}

export default Feed