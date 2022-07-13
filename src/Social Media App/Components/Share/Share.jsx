import './Style.css'
import React from 'react'
import image3 from '../../asserts/Images/ls1.jpg';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={image3} alt='not avilable' className='shareProfileImage' />
                <input placeholder= " what's in your mind mr.vijay" className='shareInput' />
            </div>
            <hr className="shareHr" />
            <div className='shareBottom'>
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
                        <span className="shareOptionText">Phot or Videos</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon htmlColor="green" className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="yellow" className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>share</button>
            </div>
        </div>

    </div>
  )
}

export default Share