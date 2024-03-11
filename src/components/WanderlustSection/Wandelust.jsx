import './WanderlustStyle.css'
import Background from './../../assets/images/video-banner.png'
import VideoPlay from './../../assets/images/video-play.svg'

const Wandelust = () => {
    return (
        <div className='Wanderlust'>
            <img src={Background} alt="" id='bg' />
            <h1>Wanderlust</h1>
            <img src={VideoPlay} alt="" id='play' />
        </div>
    )
}

export default Wandelust
