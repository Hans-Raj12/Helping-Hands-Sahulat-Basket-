import React, {useState, useEffect, useContext} from 'react'

import './DonorProjects.css'
import FundraisingPostCards from './FundraisingPostCards'
import { AuthContext } from '../context/AuthContext';

const DonorProjects = () =>{

    const [posts, setPosts] = useState([])
  const { credentials } = useContext(AuthContext)
    useEffect(()=>{
  
        fetch(`/fundraising-posts`,{
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
                  return  <FundraisingPostCards key={post._id} post={post} user={credentials?.user}/>
                })}
            </div>
        </div>
    )
}

export default DonorProjects