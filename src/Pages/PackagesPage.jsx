import Header from '../components/Header/Header'
import TravelSection from '../components/TravelSection/TravelSection'
import PackagesHeroImg from './../assets/images/packages-bg.png'
import Footer from '../components/Footer/Footer'
const PackagesPage = () => {
    return (
        <div className='packages-page'>
            <Header heroImg={PackagesHeroImg} heroText={"Travel With Us"} />
            <TravelSection />
            <Footer />
        </div>
    )
}

export default PackagesPage
