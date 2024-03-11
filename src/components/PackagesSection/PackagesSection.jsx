import './PackagesSectionStyle.css'
import ImgExploreNature from './../../assets/images/explore-nature.png'
import ImgExploreCities from './../../assets/images/explore-cities.png'
const PackagesSection = () => {
    return (
        <div className="Packages">
            <div className="package">
                <img src={ImgExploreNature} alt="" />
                <div className="content">
                    <p>PROMOTION</p>
                    <h1>Explore Nature</h1>
                    <button>View Packages</button>
                </div>
            </div>
            <div className="package">
                <img src={ImgExploreCities} alt="" />
                <div className="content">
                    <p>PROMOTION</p>
                    <h1>Explore Cities</h1>
                    <button>View Packages</button>
                </div>
            </div>
        </div>
    )
}

export default PackagesSection
