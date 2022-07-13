import React from 'react'
import './Style.css';
import image5 from '../../asserts/Images/ls3.jpg'

function RighBar() {
  return (
    <div className='rightbar'>
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src={image5} alt="" className="birthdayImage" />
          <span className="birthdayText"> <b>vijay kumar</b> and <b>3 others</b> have a birthday today!</span>
        </div>
        <img src={image5} alt="" className="rightbarAd" />
        <h4 className='rightbarOnlineText'>Online Friends</h4>
      <ul className="rightbarFriends">
        <li className="rightbarFriendList">
          <div className="rightbarProfileImageContainer">
            <img src={image5} alt="" className="rightbarProfileImage" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarFriendsUserName">vijay kumar</span>

        </li>
        <li className="rightbarFriendList">
          <div className="rightbarProfileImageContainer">
            <img src={image5} alt="" className="rightbarProfileImage" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarFriendsUserName">vijay kumar</span>

        </li>
        <li className="rightbarFriendList">
          <div className="rightbarProfileImageContainer">
            <img src={image5} alt="" className="rightbarProfileImage" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarFriendsUserName">vijay kumar</span>

        </li>
        <li className="rightbarFriendList">
          <div className="rightbarProfileImageContainer">
            <img src={image5} alt="" className="rightbarProfileImage" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarFriendsUserName">vijay kumar</span>

        </li>
        
      </ul>
      </div>
      
    </div>
  )
}

export default RighBar