import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import PackagesPage from './Pages/PackagesPage'
import ServicesPage from './Pages/ServicesPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Packages' element={<PackagesPage />} />
        <Route path='/Services' element={<ServicesPage />} />
      </Routes>
    </>
  )
}

export default App
