


import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
const Home = () => {
  return (
    <div className="min-h-screen bg-beige pt-40">
      <HeroSection />
      <FeaturesSection />
      <CTABanner />
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default Home
