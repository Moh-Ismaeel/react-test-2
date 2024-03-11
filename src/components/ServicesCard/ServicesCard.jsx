/* eslint-disable react/prop-types */
import './ServicesCardStyle.css'

const ServicesCard = ({ img, titleCard, description }) => {
    return (
        <>
            <div className="services-card">
                <img src={img} alt="" />
                <div className="info">
                    <h2 className='TitleCard'>{titleCard}</h2>
                    <p className='Description'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ServicesCard