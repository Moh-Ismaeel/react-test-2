import './ServicesSectionStyle.css'
import guided from './../../assets/images/Guided.png'
import BestFlights from './../../assets/images/Best Flights.png'
import Religious from './../../assets/images/Religious.png'
import medicalTeam from './../../assets/images/medical team.png'
import ServicesCard from './../ServicesCard/ServicesCard'
import SectiontTitle from '../SectionTitle/SectiontTitle'
const desc = "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
const Category = () => {
    return (
        <>
            <div className="services">
                <SectiontTitle topTitle="CATEGORY" mainTitle="We Offer Best Services" />
                <div className="container">
                    <ServicesCard img={guided} titleCard={"Guided Tours"} description={desc} />
                    <ServicesCard img={BestFlights} titleCard={"Best Flights Options"} description={desc} />
                    <ServicesCard img={Religious} titleCard={"Religious Tours"} description={desc} />
                    <ServicesCard img={medicalTeam} titleCard={"Medical insurance"} description={desc} />
                </div>
            </div>
        </>
    )
}

export default Category