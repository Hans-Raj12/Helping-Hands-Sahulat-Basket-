import React, { useState } from 'react'
import './sidebar.css'
import {
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaUserAlt,
    FaTh,
    FaThList,
    FaBars,
    
} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import { NavLink, Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import RightsReservedFooter from '../RightsReservedFooter'
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path:'',
            name:'Dashboard',
            icon:<FaTh/>

        },
        {
            path:'verify-ngo',
            name:'Verify NGO',
            icon:<FaUserAlt/>

        },
        {
            path:'view-ngos',
            name:'View NGOs',
            icon:<FaRegChartBar/>

        },
        {
            path:'view-donors',
            name:'View Donors',
            icon:<FaCommentAlt/>
        },
        {
            path:'view-needy',
            name:'View Needy',
            icon:<FaCommentAlt/>
        },
        {
            path:'add-remove-ngos',
            name:'Add/Remove NGOs',
            icon:<FaShoppingBag/>

        },
        {
            path:'add-remove-donors',
            name:'Add/Remove Donors',
            icon:<FaThList/>

        },
        {
            path:'settings',
            name:'Setting',
            icon:<FiSettings/>

        },
    ]

    return (
        <>
        <AdminHeader/>
        <div className='sidebar-container'>
            <div className='sidebar' style={{width:isOpen?"250px":"50px"}}>
                <div className='top_section'>
                    <h1 className='logo' style={{display:isOpen?"block":"none"}}>Admin</h1>
                    <div className='bars' style={{marginLeft:isOpen?"100px":"0px"}}>
                    <FaBars onClick={toggle}/>
                </div>
                </div>
                
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className='link' activeclassname='active'>
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text' style={{display:isOpen?"block":"none"}}>{item.name}</div>
                        </NavLink>
                        
                    ))
                    
                }
            </div>
            <main>{children}</main>
            
            <Outlet/>
        </div>
        <RightsReservedFooter/>
        </>
    )
}
export default Sidebar