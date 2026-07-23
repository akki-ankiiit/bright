import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ProductSection from '../components/sections/ProductSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import TeamSection from '../components/sections/TeamSection'
import CommunitySection from '../components/sections/CommunitySection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
 return (
 <>
 <Helmet>
 <title>BrightFutureEnergy | Powering a Cleaner Future</title>
 </Helmet>
 
 <main className="bg-white">
 <HeroSection />
 <AboutSection />
 <ProductSection />
 <FeaturesSection />
 <TeamSection />
 <CommunitySection />
 <ContactSection />
 </main>
 </>
 )
}
