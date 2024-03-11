import Header from '../components/Header/Header'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import PackagesSection from '../components/PackagesSection/PackagesSection'
import TrendingSection from '../components/TrendingSection/TrendingSection'
import Footer from '../components/Footer/Footer'
import Sidebar from "../components/Sidebar/Sidebar"
import HomeHeroImg from './../assets/images/hero.png'

const HomePage = () => {
    return (
        <div>
            <Header heroImg={HomeHeroImg} heroText={"No Matter Where You're Going To, We'll Take You There"} />
            <ServicesSection />
            <PackagesSection />
            <TrendingSection />
            <Footer />
        </div>
    )
}

export default HomePage
