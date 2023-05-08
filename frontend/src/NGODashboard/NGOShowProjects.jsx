import React, {useState, useEffect} from 'react'

import './NGOShowProjects.css'
import FundraisingPostCard from './CreatePost/FundraisingPostCard'

const NGOShowProjects = () =>{

    const [posts, setPosts] = useState([])

    useEffect(()=>{
  
        fetch('/fundraising-posts')
        .then(response => response.json())
        .then(data => {
          console.log(data); 
          setPosts(data)
        })
        .catch(error => console.error(error));
      },[])

      

    return(
        <div className="show-project-container">
            <h1>NGO PROJECTS</h1>
            <div className='fundraising-post-cards'>
                {posts.map(post=>{
                  return  <FundraisingPostCard key={post._id} post={post}/>
                })}
            </div>
        </div>
    )
}

export default NGOShowProjects