/* eslint-disable react/prop-types */
import './TrendingCardStyle.css'
import StarImg from './../../assets/images/star.svg'
import DaysIcon from './../../assets/images/uil_calender.svg'
const TrendingCard = ({ img, flag, days, peopleGoing, title, desc }) => {
    return (
        <div className='trending-card'>
            <div className="image-card">
                <img src={img} alt="" />
                <img src={flag} alt="" id='flag' />
            </div>
            <div className="description">
                <div className="details">
                    <div className="days">
                        <img src={DaysIcon} alt="" /> <span> {days} Days
                        </span>
                    </div>
                    <div className="people-going">
                        <i className="fa-regular fa-user"></i>
                        <span>   {peopleGoing} People Going</span>
                    </div>
                </div>
                <div className="rate">
                    <h2>{title}</h2>
                    <div className="stars">
                        <ul>
                            <li><img src={StarImg} alt="" /></li>
                            <li><img src={StarImg} alt="" /></li>
                            <li><img src={StarImg} alt="" /></li>
                            <li><img src={StarImg} alt="" /></li>
                            <li><img src={StarImg} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <p>{desc}</p>
                <button className="explore-button">Explore Now</button>
            </div>
        </div>
    )
}

export default TrendingCard
