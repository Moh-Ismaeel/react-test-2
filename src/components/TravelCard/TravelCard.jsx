/* eslint-disable react/prop-types */
import './TravelCardStyle.css'
import star from './../../assets/images/star_2.svg'
const TravelCard = ({ img, date, visitors, city, salary, rate }) => {
    return (
        <div className='travel-card'>
            <img className='city-img' src={img} alt="" />
            <div className="info">
                <p className='Date'>{date}</p>
                <p className='visitors'>{visitors}+ People</p>
            </div>
            <h2>{city}</h2>
            <p className='desc'>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
            <div className='end-card'>
                <p className='salary'>{salary} $</p>
                <div className="stars">
                    <img src={star} alt="" />
                    <span>{rate}</span>
                </div>
            </div>
        </div>
    )
}

export default TravelCard
