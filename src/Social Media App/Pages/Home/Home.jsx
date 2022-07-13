import React from 'react'
import Feed from '../../Components/Feed/Feed'
import RighBar from '../../Components/RightBar/RighBar'
import SideBar from '../../Components/SideBar/SideBar'
import TopBar from '../../Components/TopBar/TopBar'
import './Home.css'

function Home() {
  return (
    <>
      <TopBar/>
      <div className="homeContainer">
        <SideBar/>
        <Feed/>
        <RighBar/>
      </div>
    </>
  )
}

export default Home