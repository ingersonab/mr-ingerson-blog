import React, {useEffect, useState}  from 'react'
import './about.css';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function About() {

  const [aboutPage, setAboutPage] = useState(null);

  const client = createClient({space: "c2coqf0hrs8z", accessToken: "rO_zDMrrcg28Vx21OpMLpsSkTxmX7uOL8molgDLYoPs"})

  useEffect(() => {
    const getAllEntries = async () => {
      try{
        const aboutEntry = await client.getEntries({
          content_type: 'aboutMePage',
          limit: 1,
        });
        console.log(aboutEntry);
        if(aboutEntry.items.length > 0){
          setAboutPage(aboutEntry.items[0]);
        }
      } catch(err) {
        console.log("Error with fetching about entries: ", err)
      }
    }
    getAllEntries()
  }, [client])

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const { file, title } = node.data.target.fields;
        const imageUrl = file?.url ? `https:${file.url}` : '';
        const altText = title || 'Embedded asset';
        return <img src={imageUrl} alt={altText} className="about-img" />;
      },
      'paragraph': (node, children) => {
        return <p className="about-paragraph">{children}</p>
      }
    },
  };

  return (
    <div className="about">
      <h1 className="about-header">About Me</h1>
      <hr className="contactDivider" />
     {aboutPage ? documentToReactComponents(aboutPage.fields.aboutMeContent, options) : "Loading..."}
    </div>
  )
}
 
