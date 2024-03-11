import SectiontTitle from '../SectionTitle/SectiontTitle'
import './TrendStyle.css'
import TourPlansImg from './../../assets/images/TourPlans-img.png';
const Trend = () => {
    return (
        <div className='trend'>
            <img src={TourPlansImg} alt="" />
            <div className="desc">
                <SectiontTitle topTitle="TREND" mainTitle="Our Popular Tour Plans" />
                <p className='info'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
                <div className="percent">
                    <div className="vacations">
                        <h2>78%</h2>
                        <h3>VACATIONS</h3>
                    </div>
                    <div className="honeymoon">
                        <h2>55%</h2>
                        <h3>HONEYMOON</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trend
