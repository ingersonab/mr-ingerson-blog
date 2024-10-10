import React, {useEffect, useState} from 'react'
import "./singlePost.css"
import {useParams} from 'react-router-dom'
import { createClient } from 'contentful';

export default function SinglePost() {

  const [singleBlogPost, setSingleBlogPost] = useState([])

  const client = createClient({space: "c2coqf0hrs8z", accessToken: "rO_zDMrrcg28Vx21OpMLpsSkTxmX7uOL8molgDLYoPs"})

  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    const getEntryById = async () => {
      try{
        await client.getEntry(id).then((entry) => {
          console.log(entry)
          setSingleBlogPost(entry)
        })
      }catch(err){
        console.log("error with retreiving the entry by id: ", err)
      }
    }
      getEntryById()
  }, [])

  console.log(singleBlogPost)

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={singleBlogPost?.fields?.blogImage?.fields?.file?.url} alt={singleBlogPost?.fields?.blogTitle} className="singlePostImg" />
          <h1 className="singlePostTitle">{singleBlogPost?.fields?.blogTitle}</h1>
          <br/>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>{singleBlogPost?.fields?.blogAuthor}</b></span>
            <span className="singlePostDate">{singleBlogPost?.fields?.createdDate}</span>
          </div>
          <p className="singlePostDesc">{singleBlogPost?.fields?.postContent}</p>
      </div>
    </div>
  )
}
