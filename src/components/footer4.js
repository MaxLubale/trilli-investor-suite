import React from 'react'
import { Link } from 'react-router-dom' // Import Link
import './footer4.css'

const Footer4 = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top when a link is clicked
  };

  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
          <Link to="/">
            <img
              alt="Logo"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a618eeca7bec3840d12dc2b2400a4228f47af59067ff4be5dc9b77ea7f21b2f0?apiKey=07b7466444764966b3e325d12cdd6280&"
              className="footer4-logo2"
            />
            </Link>
          </div>
          <div className="footer4-links">
            <Link
              to="/trillionbank"
              className="thq-body-small"
              onClick={handleScrollToTop}
            >
              <span className="footer4-text16">Bank</span>
            </Link>
            <Link
              to="/trillionit"
              className="thq-body-small"
              onClick={handleScrollToTop}
            >
              <span className="footer4-text18">Digital Wallet</span>
            </Link>
            <Link
              to="/trillipay"
              className="thq-body-small"
              onClick={handleScrollToTop}
            >
              <span className="footer4-text15">Payment Gateway</span>
            </Link>
            <Link
              to="/trifone"
              className="thq-body-small"
              onClick={handleScrollToTop}
            >
              <span className="footer4-text19">Phone</span>
            </Link>
            <Link
              to="/blokchain"
              className="thq-body-small"
              onClick={handleScrollToTop}
            >
              <span className="footer4-text14">3D Blockchain</span>
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
            <span className="thq-body-small" style={{ color: 'gold' }}>
              POWERED BY NEO TRILLI AO
            </span>
              
              
            </div>

            <div style={{ textAlign: 'center' }}> 
            <span className="thq-body-small">© 2024 TRILLI ON FINANCIAL SUITE</span>

            </div>
            <div className="footer4-footer-links">
            <Link
                to="/contact-us"
                className="thq-body-small"
                onClick={handleScrollToTop}
              >
                <span className="footer4-text21">Contact Us</span>
              </Link>
              <Link
                to="/privacy-policy"
                className="thq-body-small"
                onClick={handleScrollToTop}
              >
                <span className="footer4-text21">Privacy Policy</span>
              </Link>
              <Link
                to="/terms-and-conditions"
                className="thq-body-small"
                onClick={handleScrollToTop}
              >
                <span className="footer4-text17">Terms and Conditions</span>
              </Link>
              <Link
                to="/cookies-policy"
                className="thq-body-small"
                onClick={handleScrollToTop}
              >
                <span className="footer4-text20">Cookies Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer4
