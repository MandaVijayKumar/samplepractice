import React from 'react';

// import {Person, Search} from '@material-ui/icons'
// import SearchIcon from '@mui/icons-material/SearchIcon';
import './TopBar.css';
import image1 from '../../asserts/Images/1.jpg'
import { AccessAlarm, ThreeDRotation, Search } from '@mui/icons-material'

function TopBar() {
  return (
    <div className='topBarContainer'>
      <div className="topBarLeft">
        <span className="logo">vijay kumar</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
         <Search className="searchBarIcon"/>
         <input placeholder='search for friends, post or videos' className='searchInput'/>
        </div>
       

      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            {/* <Person/> */}
            <span>person</span>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <span>chat</span>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            {/* <Person/> */}
            <span>notification</span>
            <span className="topBarIconBadge">1</span>
          </div>
          
        </div>
      
        
        <img src= {image1} className='topBarImage'/>

    </div>
    </div>
    
  )
}

export default TopBar