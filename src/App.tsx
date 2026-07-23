import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingChat from './components/ui/FloatingChat'
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Team from './pages/Team'
import Terms from './pages/Terms'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'

function App() {
 return (
 <Router>
 <div className="min-h-screen flex flex-col font-sans bg-brand-bg text-brand-text">
 <Helmet>
 <title>BrightFutureEnergy - PM SuryaGhar Yojana Solar Panels</title>
 <meta name="description" content="BrightFutureEnergy - Solar Energy for Every Indian Home. Zero Investment, Maximum Savings. Powered by PM SuryaGhar Yojana." />
 </Helmet>
 
 <Navbar />
 
 <main className="flex-grow">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/how-it-works" element={<HowItWorks />} />
 <Route path="/team" element={<Team />} />
 <Route path="/terms" element={<Terms />} />
 <Route path="/privacy" element={<PrivacyPolicy />} />
 <Route path="/contact" element={<Contact />} />
 </Routes>
 </main>
 
 <Footer />
 <FloatingChat />
 </div>
 </Router>
 )
}

export default App
