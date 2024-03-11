import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PromotionSection from "../components/PromotionSection/PromotionSection"
import WanderlustSection from "../components/WanderlustSection/Wandelust"
import AboutHeroImg from './../assets/images/about-bg.png'
import TrendSection from '../components/TrendSection/Trend'
const AboutPage = () => {
    return (
        <div className="about-page">
            <Header heroImg={AboutHeroImg} heroText={"About Us"} />
            <PromotionSection />
            <WanderlustSection />
            <TrendSection />
            <Footer />
        </div>
    )
}

export default AboutPage
