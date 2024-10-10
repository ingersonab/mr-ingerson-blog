import React, {useEffect, useState} from 'react'
import "./Post.css"
import {Link} from "react-router-dom";
import { createClient } from 'contentful';

export default function Post() {

  const [blogPosts, setBlogPosts] = useState([])

  const client = createClient({space: "c2coqf0hrs8z", accessToken: "rO_zDMrrcg28Vx21OpMLpsSkTxmX7uOL8molgDLYoPs"})

  useEffect(() => {
    const getAllEntries = async () => {
      try{
        await client.getEntries().then((entries) => {
          console.log(entries)
          setBlogPosts(entries)
        })
      } catch(err) {
        console.log("Error with fetching blog entries: ", err)
      }
    }
    getAllEntries()
  }, [])

  return (
    <>
      {blogPosts?.items?.map((post) => 
        <Link
          to={`/postDetails/${post.sys.id}`}
          className="postLink"
          key={post.sys.id}
        >
          <div className="post">
            <img className="postImg"
              src={post.fields.blogImage.fields.file.url}
              alt={post.fields.blogTitle}
            />
            <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Teaching</span>
                  <span className="postCat">Coaching</span>
              </div>
              <span className="postTitle">{post.fields.blogTitle}</span>
              <hr />
              <span className="postDate">{post.fields.createdDate}</span>
            </div>
            <p className="postDesc">
              {post.fields.postContent}
            </p>
          </div>
        </Link>
      )}  
    </>
  )
}
