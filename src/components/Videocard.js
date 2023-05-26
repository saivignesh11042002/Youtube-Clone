import React from 'react'
import './Videocard.css'
import { Link } from 'react-router-dom'

const Videocard=({v}) =>{
  if(v==null)
  console.log("null")
  return (
    <div className="video-list">
    
    
<Link to={`/videos`} state={v}>
<div className="thumbnail" style={{ backgroundImage: `url(${v.submission.thumbnail})` , alt: "No image" }}>
  
  <span className="timestamp">0:36</span>
  </div>
</Link>
<div className="video-info">
<h2 className="video-title"><b>{v.submission.title!==undefined?v.submission.title:"No title"}</b></h2> 
<h4 className="creator">{v.creator.name!==undefined?v.creator.name:"Anonymous"}</h4>
<h5 className="creator">25 views . 3 months ago</h5>
</div>
</div>



  )
}

export default Videocard
