import React from 'react';
import './DonorProjects.css';
const ProjectsDetails =[
    {
        name: "Sundar LaL",
        noti: "Need 15 lady dresses for his daughter",
        Address: "Near bypass road dharaki",
        time: "1 month ago",
        donate: "Donate"
    },
    {
        name: "Nazeer Ahmed",
        noti: "Need 10 kg flour and some vegetables as a food to survive and he is unemployeed",
        Address: "Near blood bank Lahore ",
        time: "2 days ago",
        donate: "Donate"
    },
    {
        name: "Flood relief Naran",
        noti: "Collecting=food and money",
        Address: "Lahore Rizq NGo",
        time: "1 month ago",
        donate: "Donate"
    },
]
function DonorProjects(){
    return(
        <div className='show-projects'>
        
        
        <div className='Projects'>
        <h1>Current Projects</h1>    
            {ProjectsDetails.map((updates)=>{
                return(
                    <div className='update'>
                           <div className='noti'>
                            <div style={{marginBottom:'0.5rem'}}>
                                <span style={{fontWeight: 'bold', fontSize: "20px", margin:'2rem'}}>{updates.name}</span><br></br>
                                <span style={{ fontSize: "20px", margin:'2rem'}}>{updates.noti}</span><br></br>
                                <span style={{fontSize: "20px", margin:'2rem'}}>{updates.Address}</span><br></br>
                               
                            </div>
                            <span style={{fontSize:'20px', margin:'2rem'}}>{updates.time}</span>
                            <button  style={{display: 'inline-flex', width:"90px", padding: "0.5rem", background:'white', color:"black", justifyContent:"center", boxShadow:'0px 0px 5px lightgray',marginLeft:'3rem'}}>{updates.donate}</button>
                            </div>
                           

                    </div>
                   
                )
            })}
        </div>
        </div>
    )
}
export default DonorProjects;
