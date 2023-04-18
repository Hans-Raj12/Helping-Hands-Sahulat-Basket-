import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
   
}from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import "./NGOSidebar.css";
import logo from '../assets/NGOImages/logo.png'
import NGOHeader from './NGOHeader';


const NGOSidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            title: 'Dashboard',
            path:"",
            cname:"Dashboard",
            icon:<FaIcons.FaTh/>
        },
          {
            title: 'Create Fundraiser Post',
            path: 'create-post',
            icon: <FaIcons.FaPlusCircle />,
            cName: 'nav-text'
          },
          {
            title: 'View Donor Profiles',
            path: 'donor-profiles',
            icon: <FaIcons.FaUserFriends />,
            cName: 'nav-text'
          },
         
          {
            title: 'Show Projects',
            path: '/projects',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
          },
          {
            title: 'Update Donation History',
            path: 'donation-history',
            icon: <FaIcons.FaHistory />,
            cName: 'nav-text'
          },
         
          {
            title: 'Profile',
            path: 'profile',
            icon: <FaIcons.FaUserAlt />,
            cName: 'nav-text'
          },
    ]
    return (
      <>
        <NGOHeader/>
      
        <div className="ngo-container">
          
           <div style={{width: isOpen ? "360px" : "50px"}} className="ngo-sidebar">
               <div className="top_section">
                   <div style={{display: isOpen ? "block" : "none"}} className="logo">NGO Name</div>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.title}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
           <Outlet/>
        </div>
        </>
    );
};

export default NGOSidebar;