import Header from '../components/Header/Header';
import '../global.css'
import FormSection from '../components/FormSection/FormSection';
import CarCardsSection from '../components/CarCardsSection/CarCardsSection';
import ButtonsSection from '../components/ButtonsSection/ButtonsSection'
import Footer from '../components/Footer/Footer';

export default function CatalogPage() {
  return (
    <div>
      <Header />
      <FormSection />
      <CarCardsSection />
      <ButtonsSection />
      <Footer />
    </div>
  )
}