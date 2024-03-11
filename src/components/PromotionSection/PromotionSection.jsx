import './PromotionSectionStyle.css'
import SectiontTitle from '../SectionTitle/SectiontTitle'
import PromotionImg from './../../assets/images/promotion_img.png'
const PromotionSection = () => {
    return (
        <div className='Promotion'>
            <div className="desc">
                <SectiontTitle topTitle="POROMOTION" mainTitle="We Provide You Best Europe Sightseeing Tours" />
                <p className='info'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                <button>View Packages</button>
            </div>
            <img src={PromotionImg} alt="" />
        </div>

    )
}

export default PromotionSection
