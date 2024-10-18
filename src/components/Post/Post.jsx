import React, {useEffect, useState} from 'react'
import "./Post.css"
import {Link} from "react-router-dom";
import { createClient } from 'contentful';

export default function Post({selectedCategory}) {

  const [blogPosts, setBlogPosts] = useState([])

  const client = createClient({space: "c2coqf0hrs8z", accessToken: "rO_zDMrrcg28Vx21OpMLpsSkTxmX7uOL8molgDLYoPs"})

  useEffect(() => {
    const getAllEntries = async () => {
      try{
        const blogEntries = await client.getEntries({
          content_type: 'blogPost',
        })
        console.log('Fetched Blog Entries:', blogEntries.items);  // Log all blog entries
        blogEntries.items.forEach((post) =>
          console.log('Post Categories:', post.fields?.blogCategory)  // Log each post's categories
        );
        setBlogPosts(blogEntries.items);

      } catch(err) {
        console.log("Error with fetching blog entries: ", err)
      }
    }
    getAllEntries()
  }, [])

  //filter posts by selected category
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) =>
      post.fields?.blogCategory?.some(
        (category) =>
          category.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
      )
    )
    : blogPosts;

    console.log('Selected Category:', selectedCategory);  // Debugging
    console.log('Filtered Posts:', filteredPosts); 

  return (
    <>
      {filteredPosts?.map((post) => (
        <Link
          to={`/postDetails/${post.sys.id}`}
          className="postLink"
          key={post.sys.id}
        >
          <div className="post">
            <img className="postImg"
              src={post.fields.blogImage?.fields?.file?.url}
              alt={post.fields.blogTitle}
            />
            <div className="postInfo">
              <div className="postCats">
                  {post.fields?.blogCategory?.map((category, index) => (
                    <span key={index} className="postCat">{category}</span>
                  ))}
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
      ))}
    </>
  )
}
