import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="./img/alexander-grey-eMP4sYPJ9x0-unsplash.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit.</h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Mark</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse impedit ea a sint necessitatibus vitae quo reprehenderit perspiciatis, excepturi expedita voluptatibus obcaecati deserunt architecto itaque error quos at minus asperiores quam ipsa consequuntur voluptatem ducimus veniam qui. Nostrum debitis similique officia necessitatibus, voluptatibus quisquam ab. Vero aspernatur fuga enim reiciendis! Reprehenderit dolore culpa blanditiis, voluptates itaque voluptas placeat officia delectus perferendis fugit provident sunt voluptatum facere molestiae aperiam soluta numquam nemo asperiores, eius unde laudantium quis, veritatis facilis! Placeat, deleniti! Dolor vitae inventore illo perferendis fugiat, quidem nobis laborum officiis adipisci aliquid tempore mollitia eaque sit, ea dolorum magnam. Asperiores!</p>
        </div>
    </div>
  )
}
