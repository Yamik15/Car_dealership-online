import './global.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TestDriveSection from './components/TestDriveSection/TestDriveSection'
import MapSection from './components/MapSection/MapSection'

export default function App() {
  return (
    <div>
      <Header/>
      <TestDriveSection/>
      <hr/>
      <MapSection/>
      <Footer/>
    </div>
  )
}