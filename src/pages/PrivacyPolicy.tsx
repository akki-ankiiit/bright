import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
 return (
 <>
 <Helmet>
 <title>Privacy Policy | BrightFutureEnergy</title>
 </Helmet>
 
 <main className="bg-white pt-[80px]">
 
 {/* Page Header */}
 <section className="bg-brand-bg-dark py-12 lg:py-24 border-b border-brand-border/40">
 <div className="max-w-4xl mx-auto px-6 text-center">
 <h1 className="font-serif text-[36px] md:text-[48px] text-brand-text mb-4">
 Privacy Policy
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
 <Link to="/privacy" className="font-sans text-[15px] font-medium text-brand-text border-l border-brand-text pl-4">
 Privacy Policy
 </Link>
 <Link to="/terms" className="font-sans text-[15px] text-brand-text-secondary hover:text-brand-text border-l border-transparent hover:border-brand-border pl-4 transition-colors">
 Terms & Conditions
 </Link>
 </nav>
 </div>
 </aside>

 {/* Main Content */}
 <div className="flex-1 prose max-w-none">
 <div className="font-sans text-[16px] text-brand-text-secondary leading-[1.9] font-light space-y-12">
 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">1. Introduction</h2>
 <p>
 BrightFutureEnergy ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
 </p>
 </div>
 
 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">2. Data We Collect</h2>
 <p>
 We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
 </p>
 <ul className="list-disc pl-6 mt-6 space-y-3">
 <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
 <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
 <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
 <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
 </ul>
 </div>

 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">3. PM SuryaGhar Yojana Specific Data</h2>
 <p>
 To process your subsidy applications under the PM SuryaGhar Yojana, we are required to collect specific documentation including electricity bills, property tax receipts, and Aadhar details. This data is handled with strict confidentiality and is shared exclusively with the relevant DISCOMs and MNRE nodal agencies.
 </p>
 </div>

 <div>
 <h2 className="font-serif text-[28px] text-brand-text mb-6">4. Data Security</h2>
 <p>
 We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
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
