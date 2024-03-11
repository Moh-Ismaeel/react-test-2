import TravelCard from '../TravelCard/TravelCard'
import './TravelSectionStyle.css'
import MaldivesImg from './../../assets/images/city-1.png'
import SwitzerlandImg from './../../assets/images/city-2.png'
import BerlinImg from './../../assets/images/city-3.png'
import TorrontoImg from './../../assets/images/city-4.png'
import BakuImg from './../../assets/images/city-5.png'
import ChineseImg from './../../assets/images/city-6.png'
const TravelSection = () => {
    return (
        <div className='travel-section'>
            <TravelCard img={MaldivesImg} date='27, September 2023' visitors='30' city='Maldives' salary='3000' rate='5.0' />
            <TravelCard img={SwitzerlandImg} date='13, October 2023' visitors='120' city='Switzerland' salary='1290' rate='4.9' />
            <TravelCard img={BerlinImg} date='2, November 2023' visitors='139' city='Berlin' salary='2790' rate='5.0' />
            <TravelCard img={TorrontoImg} date='14, December 2022' visitors='50' city='Torronto' salary='1110' rate='4.0' />
            <TravelCard img={BakuImg} date='d0, September 2022' visitors='80' city='Baku' salary='1220' rate='4.5' />
            <TravelCard img={ChineseImg} date='27, August 2023' visitors='100' city='Chinese' salary='2500' rate='5.0' />
        </div>
    )
}

export default TravelSection
