import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="./img/AboutMe.jpeg" height="150" width="150" alt="Mark_Ingerson"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nulla, porro fugiat voluptatibus nostrum magni ut amet corrupti nobis exercitationem nam iure quos aspernatur iste cupiditate enim omnis, consequuntur neque soluta ducimus ullam distinctio praesentium? </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Teaching</li>
          <li className="sidebarListItem">Coaching</li>
          <li className="sidebarListItem">Health</li>
          <li className="sidebarListItem">Parenting</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  )
}
