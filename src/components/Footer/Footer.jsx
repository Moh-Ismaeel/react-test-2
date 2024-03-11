import './FooterStyle.css'
import FooterLogo from './../../assets/images/logo footer.png'
import LinkedInIcon from "./../../assets/images/linkedin.svg";
import MessengerIcon from "./../../assets/images/messenger.svg";
import Twittericon from "./../../assets/images/twitter.svg";
import TwooIcon from "./../../assets/images/twoo.svg";
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="left-footer">
                    <img src={FooterLogo} alt="" />
                    <p>Travel helps companies manage payments easily.</p>
                    <ul>
                        <li><a href="www.linkedin.com"><img src={LinkedInIcon} alt="" /></a></li>
                        <li><a href="www.Messenger.com"><img src={MessengerIcon} alt="" /></a></li>
                        <li><a href="www.Twitter.com"><img src={Twittericon} alt="" /></a></li>
                        <li><a href="www.Twoo.com"><img src={TwooIcon} alt="" /></a></li>
                    </ul>
                </div>
                <div className="center-footer">
                    <h1>Company</h1>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </div>
                <div className="right-footer">
                    <h1>Destinations</h1>
                    <ul>
                        <li><a href="">Maldives</a></li>
                        <li><a href="">Los Angelas</a></li>
                        <li><a href="">Las Vegas</a></li>
                        <li><a href="">Torronto</a></li>
                    </ul>
                </div>
            </div>
            <p className='end-footer'>
                Copyright @ Xpro 2023 All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer
