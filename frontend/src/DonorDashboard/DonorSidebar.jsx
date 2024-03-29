import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {
    FaBars,
   
}from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io';
import './DonorSidebar.css';
import DonorHeader from './DonorHeader';
import RightsReservedFooter from '../components/RightsReservedFooter';
const DonorSidebar = ({children}) => {
  const { credentials } = useContext(AuthContext)
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
            title: 'Create Donation',
            path: 'create-donation',
            icon: <FaIcons.FaPlusCircle />,
            cName: 'nav-text'
          },
          {
            title: 'View NGOs',
            path: 'view-ngos',
            icon: <FaIcons.FaUserFriends />,
            cName: 'nav-text'
          },
          {
            title: 'View Needy',
            path: 'view-needy',
            icon: <FaIcons.FaUserFriends />,
            cName: 'nav-text'
          },
          {
            title: 'Show Projects',
            path: 'donor-projects',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
          },
          {
            title: 'Donation History',
            path: 'donor-donations-history',
            icon: <IoIcons.IoIosPaper />,
            cName: 'nav-text'
          },
          {
            title: 'Profile',
            path: 'profile',
            icon: <FaIcons.FaUserAlt />,
            cName: 'nav-text'
          }

    ]
    return (
        <>
            <DonorHeader/>
        
        <div className="donor-sidebar-container">
           <div style={{width: isOpen ? "360px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{credentials?.user?.name}</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.title}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
           <Outlet/>
        </div>
        <RightsReservedFooter/>
        </>
    );
};

export default DonorSidebar;