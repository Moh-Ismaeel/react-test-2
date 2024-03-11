import './HeaderStyle.css'
import NavBar from '../NavBar/NavBar'
import Logo from './../../assets/images/Logo.png'
// import Sidebar from '../Sidebar/Sidebar'
// import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Header = ({ heroImg, heroText }) => {
    // const [list, setlist] = useState(false);
    return (
        <header>
            <NavBar menu={[{ title: "Home", path: '/' }, { title: "About", path: '/About' }, { title: "Packages", path: '/Packages' }, { title: "Services", path: '/Services' }]} logo={Logo} button={"Get in Touch"} />
            {/* <Sidebar /> */}
            <div className="hero">
                <img src={heroImg} alt="" />
                <h1>{heroText}</h1>
            </div>
        </header>
    )
}

export default Header
