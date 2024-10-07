import React from 'react'
import "./Header.css"

export default function Header() {

  const headerStyle = {
      height: '300px',
      backgroundImage: 'url(/img/headerPic.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="header" style={headerStyle}>
        <div className="headerTitles">
            <span className="headerTitleSm">Mr. Ingerson</span>
            <span className="headerTitleLg">Blogs</span>
        </div>
        
    </div>
  )
}
