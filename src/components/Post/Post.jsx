import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
        src="./img/alexander-grey-eMP4sYPJ9x0-unsplash.jpg"
        alt="post_img"
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Teaching</span>
            <span className="postCat">Coaching</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab fuga harum consequuntur laboriosam doloribus exercitationem adipisci et laudantium ut ipsam modi, deleniti cupiditate beatae earum fugit culpa voluptatum doloremque incidunt delectus tempore. Alias tenetur laudantium doloribus. Consectetur libero quasi, voluptatum itaque consequuntur modi et rem illo perferendis iure impedit corporis mollitia quae aliquam doloribus autem esse velit quod voluptate quam nobis. Fuga hic officia saepe iste ullam quo aliquam debitis recusandae magnam commodi placeat illo ratione, est, odit fugiat quas in possimus ad! Explicabo mollitia rem ipsa animi enim perspiciatis natus error numquam dolores. Officiis aperiam ipsum rerum veritatis?
      </p>
    </div>
  )
}
