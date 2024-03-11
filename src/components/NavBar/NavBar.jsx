/* eslint-disable react/prop-types */
import './NavBarStyle.css'
import { NavLink } from 'react-router-dom'
import { createContext, useState } from 'react'
import listImg from './../../assets/images/menu-icon-1.svg'
import Sidebar from '../Sidebar/Sidebar'

// eslint-disable-next-line react/prop-types
export const MenuStatus = createContext(false)

const NavBar = ({ menu, logo, button }) => {
    const [list, setlist] = useState(false);
    return (
        <nav>
            <div className="logo"><img src={logo} alt="" /></div>
            <ul className='main-nav'>
                {menu.map((element, index) => {
                    return (
                        <li key={index}><NavLink to={element.path} className={({ isActive }) =>
                            isActive ? "active" : ""
                        }>{element.title}</NavLink></li>
                    )
                })}
            </ul>
            <button id='get-in-touch'>{button}</button>
            <div className="list">
                <button id='list-button' onClick={() => { setlist(!list) }}><img src={listImg} alt="" /></button>
            </div>
            <MenuStatus.Provider value={list} >
                {/* <Sidebar listStatus={list} /> */}
                <Sidebar menu={menu} />
            </MenuStatus.Provider>
        </nav>
    )
}

export default NavBar
