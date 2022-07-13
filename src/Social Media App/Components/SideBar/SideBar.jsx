import React from 'react'
import './Style.css'
import { AccessAlarm, ThreeDRotation, Chat } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import FeedIcon from '@mui/icons-material/Feed';
import image2 from '../../asserts/Images/2.jpg'


function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <FeedIcon className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">feed</span>

                </li>
                <li className="sidebarListItem">
                    <ChatIcon className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">chats</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">videos</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">groups</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">bookmarks</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">questions</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">jobs</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">events</span>

                </li>
                <li className="sidebarListItem">
                    <AccessAlarm className='sidebarListItemIcon'/>
                    <span className="sidebarListItemText">courses</span>

                </li>
            </ul>
            <button className="sidebarButton">show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendsList">
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>
                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>

                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>

                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>

                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>

                <li className='sidebarFriendsListItem'>
                    <img src={image2} className='sidebarFriendImage'/>
                    <span className="sidebarFiendName">vijay</span>

                </li>


            </ul>
        </div>
    
    
    </div>
  )
}

export default SideBar