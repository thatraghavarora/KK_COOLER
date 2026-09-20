import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PersonalCoolersPage from './pages/PersonalCoolersPage'
import CommercialCoolerPage from './pages/CommercialCoolerPage'
import TowerCoolersPage from './pages/TowerCoolersPage'
import AllCoolersPage from './pages/AllCoolersPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PedestalFanPage from './pages/PedestalFanPage'
import AllPurposeFansPage from './pages/AllPurposeFansPage'
import ExhaustFanPage from './pages/ExhaustFanPage'
import RoomHeaterPage from './pages/RoomHeaterPage'
import IronPage from './pages/IronPage'
import EnquiryPage from './pages/EnquiryPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            {/* Standard English Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/all-coolers" element={<AllCoolersPage />} />
            <Route path="/coolers" element={<AllCoolersPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cooler/:id" element={<ProductDetailPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/personal-coolers" element={<PersonalCoolersPage />} />
            <Route path="/commercial-cooler" element={<CommercialCoolerPage />} />
            <Route path="/tower-coolers" element={<TowerCoolersPage />} />
            <Route path="/pedestal-fan" element={<PedestalFanPage />} />
            <Route path="/all-purpose-fans" element={<AllPurposeFansPage />} />
            <Route path="/exhaust-fan" element={<ExhaustFanPage />} />
            <Route path="/room-heater" element={<RoomHeaterPage />} />
            <Route path="/iron" element={<IronPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/contact-us" element={<ContactPage />} />

            {/* Hindi Routes (/in and /in/*) */}
            <Route path="/in" element={<HomePage />} />
            <Route path="/in/all-coolers" element={<AllCoolersPage />} />
            <Route path="/in/coolers" element={<AllCoolersPage />} />
            <Route path="/in/product/:id" element={<ProductDetailPage />} />
            <Route path="/in/cooler/:id" element={<ProductDetailPage />} />
            <Route path="/in/about-us" element={<AboutPage />} />
            <Route path="/in/personal-coolers" element={<PersonalCoolersPage />} />
            <Route path="/in/commercial-cooler" element={<CommercialCoolerPage />} />
            <Route path="/in/tower-coolers" element={<TowerCoolersPage />} />
            <Route path="/in/pedestal-fan" element={<PedestalFanPage />} />
            <Route path="/in/all-purpose-fans" element={<AllPurposeFansPage />} />
            <Route path="/in/exhaust-fan" element={<ExhaustFanPage />} />
            <Route path="/in/room-heater" element={<RoomHeaterPage />} />
            <Route path="/in/iron" element={<IronPage />} />
            <Route path="/in/enquiry" element={<EnquiryPage />} />
            <Route path="/in/contact-us" element={<ContactPage />} />

            {/* Fallback routes */}
            <Route path="/in/*" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <FloatingWhatsApp />
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
