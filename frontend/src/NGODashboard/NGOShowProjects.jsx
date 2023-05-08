import React, {useState, useEffect, useContext} from 'react'

import './NGOShowProjects.css'
import FundraisingPostCard from './CreatePost/FundraisingPostCard'
import { AuthContext } from '../context/AuthContext';

const NGOShowProjects = () =>{

    const [posts, setPosts] = useState([])
  const { credentials } = useContext(AuthContext)
   const ngoEmail = credentials?.user?.email 
    useEffect(()=>{
  
        fetch(`/fundraising-posts?ngoEmail=${ngoEmail}`,{
            method:"GET"
        })
        .then(response => response.json())
        .then(data => {
          setPosts(data)
          
        })
        .catch(error => console.error(error));
      })

      

    return(
        <div className="show-project-container">
            <h1>NGO PROJECTS</h1>
            <div className='fundraising-post-cards'>
                {posts.map(post=>{
                  return  <FundraisingPostCard key={post._id} post={post} user={credentials?.user}/>
                })}
            </div>
        </div>
    )
}

export default NGOShowProjects