
import Header from '../components/Header/Header'
import '../global.css'
import DreamDeliverySection from '../components/DreamDeliverySection/DreamDeliverySection'
import FormSection from '../components/FormSection/FormSection'
import ButtonsSection from '../components/ButtonsSection/ButtonsSection'
import Footer from '../components/Footer/Footer'


export default function HomePage() {
  return (
    <div>
      <Header />
      <DreamDeliverySection />
      <FormSection />
      <ButtonsSection />
      <Footer />
    </div>
  )
}