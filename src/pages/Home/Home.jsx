import React, {useState} from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Header/>
      <div className="home">
          <div className="postContainer">
            <Post selectedCategory={selectedCategory}/>
          </div>
          <Sidebar setSelectedCategory={setSelectedCategory}/>
      </div>
    </>
  )
}
