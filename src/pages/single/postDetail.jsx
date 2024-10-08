import React from 'react'
import "./postDetail.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import SinglePost from '../../components/SinglePost/SinglePost'

export default function PostDetail() {
  return (
    <div class="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
