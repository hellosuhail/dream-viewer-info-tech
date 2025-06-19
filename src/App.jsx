import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import LineAnimation from './components/LineAnimation'
import Home from './components/Routes/Home'
import Footer from './components/Footer'
import AboutUs from './components/Routes/Aboutus'
import Service from './components/Routes/Service'
import Contact from './components/Routes/Contact'
import CaseStudiesSingle from './components/Routes/CaseStudiesSingle'
import GoTopButton from './components/TopButtpon'
  

function App() {
   
  return (
    <>
   <LineAnimation/>

    <Router>
      <Navbar/>
      <GoTopButton/>
      <CustomCursor/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/casestudies' element={<CaseStudiesSingle/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App
