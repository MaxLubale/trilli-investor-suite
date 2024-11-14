import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar8 from '../components/navbar8';
import Hero17 from '../components/hero17';
import Features24 from '../components/features24';
import CTA26 from '../components/cta26';
import Features25 from '../components/features25';
import Steps2 from '../components/steps2';
import Contact10 from '../components/contact10';
import Footer4 from '../components/footer4';
import { Services } from '../components/services';
import './home.css';


// Importing individual pages for routing

const Home = () => {
  return (
    
      <div className="home-container">
        <Helmet>
          <title>TRILLI ON FINANCIAL SUITE</title>
          <meta property="og:title" content="TRILLI-ON FINANCIAL SUITE" />
        </Helmet>

        <Navbar8
          page4Description={<span className="home-text100">INDIGENOUS FINANCIAL GATEWAY</span>}
          action1={<span className="home-text101">Login</span>}
          link2={<span className="home-text102">Trilli On Bank</span>}
          page1={<span className="home-text103">Home</span>}
          link1={<span className="home-text104">3D Blockchain</span>}
          page4={<span className="home-text105">Payment Gateway</span>}
          page2={<span className="home-text106">3D Blockchain</span>}
          link4={<span className="home-text107">MORE</span>}
          page1Description={<span className="home-text108">START THE JOURNEY WITH US</span>}
          page2Description={<span className="home-text109">BIODIGITAL SUPREMACY</span>}
          link3={<span className="home-text110">Digital Wallet</span>}
          page3={<span className="home-text111">Digital Wallet</span>}
          page3Description={<span className="home-text112">YOUR ASSETS IN ONE WALLET</span>}
          action2={<span className="home-text113">Logout</span>}
        />

        <Hero17
          action2={<span className="home-text114">Secondary action</span>}
          action1={<span className="home-text115">Main action</span>}
          heading1={<span className="home-text116">Welcome to Trilli On Financial Suite</span>}
          content1={<span className="home-text117">Experience the future of finance with our innovative trilli on financial suite. Explore our range of products designed to revolutionize the way you invest and manage your assets.</span>}
        />

        <Features24
          feature1Title={<span className="home-text121">TRILLI ON Bank</span>}
          feature1Description={<span className="home-text122">Manage your finances effectively with our innovative banking services.</span>}
          feature2Title={<span className="home-text123">TRILLI PAY</span>}
          feature2Description={<span className="home-text120">Make quick and easy payments with our efficient payment gateway.</span>}
          feature3Title={<span className="home-text119">3D BLOKCHAIN - BIODIGITAL SUPREMACY</span>}
          feature3Description={<span className="home-text118">Experience seamless and secure transactions with our cutting-edge blockchain system.</span>}
        />

        <CTA26
          heading1={<span className="home-text124">Ready to invest in the future?</span>}
          content1={<span className="home-text125">Explore our products and start your journey with NEO TRILLI AO today.</span>}
          action1={<span className="home-text126">Get started</span>}
        />

        <Features25
          feature1Title={<span className="home-text130">TRI FONE</span>}
          feature1Description={<span className="home-text128">Experience all trilli apps and more with the future of mobile phones with all the latest technologies at your fingertips.</span>}
          feature2Title={<span className="home-text129">TRILLI ON IT - MONEY WALLET</span>}
          feature2Description={<span className="home-text131">Safely store and manage your digital assets with our advanced digital wallet. Access your funds anytime, anywhere.</span>}
        />

        <Services />

        <Steps2
          step1Title={<span className="home-text190">Sign Up for Neo Trillao</span>}
          step1Description={<span className="home-text186">Create an account on Neo Trillao's platform to access all the financial suite products.</span>}
          step2Title={<span className="home-text188">Explore the Trillion Financial Suite</span>}
          step2Description={<span className="home-text189">Discover the range of products offered by Neo Trillao, including a bank, digital wallet, payment gateway, phone, and blockchain system.</span>}
          step3Title={<span className="home-text191">Learn More About Specific Products</span>}
          step3Description={<span className="home-text187">Click on 'Learn More' to delve deeper into each product's features and benefits.</span>}
          step4Title={<span className="home-text193">Invest in Your Future</span>}
          step4Description={<span className="home-text192">Ready to invest? Simply click on the 'Invest' button on the product page to start your journey with Neo Trillao.</span>}
        />

        <Contact10
          heading1={<span className="home-text210">Contact Us</span>}
          content1={<span className="home-text208">Feel free to reach out to us for any inquiries or investment opportunities.</span>}
          location1Description={<span className="home-text209">123 Tech Street, Neo City, Trillionland</span>}
          location2Description={<span className="home-text211">456 Finance Avenue, Digital District, Trillionland</span>}
          location1={<span className="home-text212">Neo Trillao Headquarters</span>}
          location2={<span className="home-text213">Investment Office</span>}
        />

        <Footer4
          link1={<span className="home-text216">Bank</span>}
          link2={<span className="home-text218">Digital Wallet</span>}
          link3={<span className="home-text215">Payment Gateway</span>}
          link4={<span className="home-text219">Phone</span>}
          link5={<span className="home-text214">Blockchain System</span>}
          termsLink={<span className="home-text217">Terms and Conditions</span>}
          cookiesLink={<span className="home-text220">Cookies Policy</span>}
          privacyLink={<span className="home-text221">Privacy Policy</span>}
        />
      </div>

      
  );
};

export default Home;
