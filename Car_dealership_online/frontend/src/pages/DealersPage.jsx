import './global.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DealerSearch from './components/DealerSearch/DealerSearch'

export default function DealersPage() {
  return (
    <div>
      <Header/>
      <DealerSearch/>
      <Footer/>
    </div>
  )
}