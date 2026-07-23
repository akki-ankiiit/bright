import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Terms() {
 return (
 <>
 <Helmet>
 <title>Terms & Conditions | BrightFutureEnergy</title>
 </Helmet>
 
 <main className="bg-white pt-[80px]">
 
 {/* Page Header */}
 <section className="bg-brand-bg-dark py-12 lg:py-24 border-b border-brand-border/40">
 <div className="max-w-4xl mx-auto px-6 text-center">
 <h1 className="font-serif text-[36px] md:text-[48px] text-brand-text mb-4">
 Terms & Conditions
 </h1>
 <p className="font-sans text-[15px] uppercase text-brand-text-secondary font-medium">
 Last updated: {new Date().toLocaleDateString()}
 </p>
 </div>
 </section>

 {/* Content with Sidebar Layout */}
 <section className="py-12 lg:py-24 px-6">
 <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
 
 {/* Sidebar Navigation */}
 <aside className="w-full md:w-[250px] shrink-0">
 <div className="sticky top-[120px]">
 <h3 className="font-sans font-medium text-[12px] text-brand-text-secondary mb-6 uppercase">
 Legal Pages
 </h3>
 <nav className="flex flex-col gap-4">
 <Link to="/privacy" className="font-sans text-[15px] text-brand-text-secondary hover:text-brand-text border-l border-transparent hover:border-brand-border pl-4 transition-colors">
 Privacy Policy
 </Link>
 <Link to="/terms" className="font-sans text-[15px] font-medium text-brand-text border-l border-brand-text pl-4">
 Terms & Conditions
 </Link>
 </nav>
 </div>
 </aside>

 {/* Main Content */}
 <div className="flex-1 prose max-w-none">
 <div className="font-sans text-[16px] text-brand-text-secondary leading-[1.9] font-light space-y-12">
 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">1. Agreement to Terms</h2>
 <p>
 By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
 </p>
 </div>
 
 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">2. Services Description</h2>
 <p>
 BrightFutureEnergy provides solar installation services, consultation, and assistance with government subsidy applications (specifically the PM SuryaGhar Yojana). We act as a facilitator and execution partner but do not guarantee government approval of subsidies, which remains at the discretion of the respective nodal agencies.
 </p>
 </div>

 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">3. Quotations & Pricing</h2>
 <ul className="list-disc pl-6 mt-6 space-y-3">
 <li>All initial quotations provided via online calculators are estimates based on standard parameters.</li>
 <li>Final pricing is only confirmed after a physical site survey by our certified engineers.</li>
 <li>Prices are subject to change based on structural requirements, cable lengths, and local DISCOM regulations.</li>
 </ul>
 </div>

 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">4. Warranties</h2>
 <p>
 We pass on manufacturer warranties to you. Typically, this includes a 25-year performance warranty on solar panels and 5-10 years on inverters. Our workmanship warranty for the installation covers a period of 5 years from the date of commissioning. 
 </p>
 </div>
 
 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">5. Limitation of Liability</h2>
 <p>
 BrightFutureEnergy shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
 </p>
 </div>
 </div>
 </div>
 
 </div>
 </section>

 </main>
 </>
 )
}
