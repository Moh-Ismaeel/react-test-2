/* eslint-disable react/prop-types */
import './SidebarStyle.css'
import { useContext, useEffect, useState } from 'react'
import { MenuStatus } from '../NavBar/NavBar'
import { NavLink } from 'react-router-dom'

//Sidebar Component
const Sidebar = ({ menu }) => {
    let listStatus = useContext(MenuStatus)
    return (
        <>
            <div className="sidebar" id="navbar" style={{ display: (listStatus) ? "block" : "none" }} >
                <div className="top-sidebar" >
                    <button id="close" className="close-sidebar text-right"><i
                        className="fa-solid fa-xmark green pointer"></i></button>
                </div >
                <div className="sidebar-nav">
                    <ul>
                        {menu.map((element, index) => {
                            return (
                                <li key={index}><NavLink to={element.path} className={({ isActive }) =>
                                    isActive ? "sidebar-active" : ""
                                }>{element.title}</NavLink></li>
                            )
                        })}
                    </ul>
                    {/* <a className="sidebar-active" href="index.html">Home</a>
                    <a href="">About</a>
                    <a href="">Packages</a>
                    <a href="">Services</a> */}
                    <button id='get-in-touch'>Get in Touch</button>
                </div>
            </div >
        </>
    )
}

export default Sidebar
