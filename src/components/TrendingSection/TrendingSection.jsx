import './TrendingSectionStyle.css'
import SectiontTitle from '../SectionTitle/SectiontTitle'
import SwitzerlandImg from "./../../assets/images/n1.png";
import AmazonImg from "./../../assets/images/n2.png";
import GizaImg from "./../../assets/images/n3.png";
import TrendingCard from '../TrendingCard/TrendingCard';
import EgyptFlag from './../../assets/images/flag-3.png'
import SwitzerlandFlag from './../../assets/images/flag-1.png'
import BarazilFlag from './../../assets/images/flag-2.png'

const description = "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
const TrendingSection = () => {
    return (
        <div className='trending-section'>
            <SectiontTitle topTitle="TRENDY" mainTitle="Our Trending Tour Packages" />
            <div className="trending-cards">
                <TrendingCard img={SwitzerlandImg} flag={SwitzerlandFlag} days={"8"} peopleGoing={"30"} title={"Switzerland"} desc={description} />
                <TrendingCard img={AmazonImg} flag={BarazilFlag} days={"8"} peopleGoing={"60"} title={"Amzaon"} desc={description} />
                <TrendingCard img={GizaImg} flag={EgyptFlag} days={"8"} peopleGoing={"120"} title={"Giza"} desc={description} />
            </div>
        </div>
    )
}

export default TrendingSection
