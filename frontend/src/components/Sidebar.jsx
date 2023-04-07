import React, { useState } from 'react'
import '../styles/sidebar.css'
import {
    FaCommentAlt,
    FaRegChartBar,
    FaShoppingBag,
    FaUserAlt,
    FaTh,
    FaThList,
    FaBars,
} from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem = [
        {
            path:'dashboard',
            name:'Dashboard',
            icon:<FaTh/>

        },
        {
            path:'about',
            name:'Verify NGO',
            icon:<FaUserAlt/>

        },
        {
            path:'analytics',
            name:'View NGOs',
            icon:<FaRegChartBar/>

        },
        {
            path:'comment',
            name:'View Donors',
            icon:<FaCommentAlt/>
        },
        {
            path:'product',
            name:'Add/Remove NGOs',
            icon:<FaShoppingBag/>

        },
        {
            path:'productList',
            name:'Add/Remove Donors',
            icon:<FaThList/>

        },
    ]

    return (
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
    )
}
export default Sidebar