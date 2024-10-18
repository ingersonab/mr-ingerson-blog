import React, {useEffect, useState}  from 'react'
import "./Sidebar.css"
import { createClient } from 'contentful';

export default function Sidebar({setSelectedCategory}) {

  const [sidebarBio, setSidebarBio] = useState(null);

  const client = createClient({space: "c2coqf0hrs8z", accessToken: "rO_zDMrrcg28Vx21OpMLpsSkTxmX7uOL8molgDLYoPs"})

  useEffect(() => {
    const getAllEntries = async () => {
      try{
        const bioEntry = await client.getEntries({
          content_type: 'sidebarBio',
          limit: 1,
        });
        console.log(bioEntry);
        if(bioEntry.items.length > 0){
          setSidebarBio(bioEntry.items[0]);
        }
      } catch(err) {
        console.log("Error with fetching sidebar entries: ", err)
      }
    }
    getAllEntries()
  }, [])

  const categories = ['Teaching', 'Coaching', 'Health', 'Parenting'];

  return (
    <div className="sidebar">
      {sidebarBio && (
        <div className="sidebarItem">
          <span className="sidebarTitle">About Me</span>
          <img src={sidebarBio.fields?.sidebarImage.fields.file.url} height="150" width="150" alt="Mark_Ingerson"/>
          <p>{sidebarBio.fields?.sidebarText}</p>
        </div>
      )}
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {categories.map((category, index) => (
            <li
              key={index}
              className="sidebarListItem"
              onClick={() => {
                console.log(`Category clicked: ${category}`);
                setSelectedCategory(category)
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i class="sidebarIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  )
}
