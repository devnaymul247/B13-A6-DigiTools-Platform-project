import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer'
import Getstarted from './Components/Getstarted'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing'
import Status from './Components/Status/Status'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Status></Status>

    <Getstarted></Getstarted>
    <Pricing></Pricing>
    <Footer></Footer>
      
    </>
  )
}

export default App
