import './SectionTitleStyle.css'
import './../../App'

// eslint-disable-next-line react/prop-types
const SectiontTitle = ({ topTitle, mainTitle }) => {
    return (
        <>
            <div className="title">
                <p className='top-title'>{topTitle}</p>
                <h1 className='main-title'>{mainTitle}</h1>
            </div>
        </>
    )
}

export default SectiontTitle
