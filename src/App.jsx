import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import LineAnimation from './components/LineAnimation'
import Home from './components/Routes/Home'
  

function App() {
   
  return (
    <>
   <LineAnimation/>

    <Router>
      <Navbar/>
      <CustomCursor/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
