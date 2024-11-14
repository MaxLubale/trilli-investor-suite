import * as React from "react";
import { useNavigate} from 'react-router-dom';
import Navbar8 from "./navbar8";
import Footer4 from "./footer4";


function VideoComponent({ src, className }) {
  return (
    <video autoPlay loop muted playsInline webkit-playsinline className={className} style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)' }}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}


function Trillionit() {
  const history = useNavigate(); // Correctly initialize history here
  const [investmentAmount, setInvestmentAmount] = React.useState("1,000"); // Default formatted amount
  const [error, setError] = React.useState('');
  const [agentCode, setAgentCode] = React.useState('');
  const [agentCodeStatus, setAgentCodeStatus] = React.useState(null);
  const [message, setMessage] = React.useState('');
  // Format number with commas
  const formatAmountWithCommas = (amount) => {
    return new Intl.NumberFormat().format(amount);
  };

  const handleInvestmentChange = (e) => {
    // Remove commas for raw number parsing
    const rawValue = e.target.value.replace(/,/g, '');
    const amount = parseFloat(rawValue);

    // Set formatted value
    setInvestmentAmount(formatAmountWithCommas(rawValue));

    // Minimum investment validation
    if (isNaN(amount) || amount < 1000) {
      setError('Minimum investment is 1000 USD');
    } else {
      setError('');
    }
  };

  const handleInvestNow = () => {
   
    
    const rawAmount = parseFloat(investmentAmount.replace(/,/g, ''));
    if (isNaN(rawAmount) || rawAmount < 1000) {
      setError('Minimum investment is 1000 USD');
      return;
    }
  
      // Use navigate() to pass data to the next page
    history('/pay', { state: { investmentAmount: rawAmount } });
  };

  const handleAgentCodeChange = (e) => setAgentCode(e.target.value);
  
  const checkAgentCode = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://trillion-funding-fqgv.onrender.com/api/validate-agent-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: agentCode })
      });

      const data = await response.json();

      if (response.ok) {
        // If the code is valid
        if (data.exists) {
          // Check if the code is already in localStorage
          const existingCode = localStorage.getItem('agentCode');

          // If the code is not the same as the existing one, store it
          if (existingCode !== agentCode) {
            localStorage.setItem('agentCode', agentCode);
            setAgentCodeStatus('Valid code');
            setMessage("Valid Code Applied and saved.");
          } else {
            setAgentCodeStatus('Already saved');
            setMessage("This code is already stored.");
          }
        } else {
          // If the code is invalid
          setAgentCodeStatus('Invalid code');
          setMessage("The code does not exist. Please check and try again.");
        }
      } else {
        setAgentCodeStatus('Error');
        setMessage(data.error || "Unable to verify the code at this time.");
      }
    } catch (error) {
      setAgentCodeStatus('Error');
      setMessage("An error occurred while checking the code.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar8 />
 
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <header style={{ paddingLeft: '0.1rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, gold, gold)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>TRILLI ON IT - MONEY WALLET</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '90%' }}>
          <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '70px', flexWrap: 'wrap' }}>
            {/* Video and Form Side by Side */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
              <div style={{ width: '50%' }}>
                <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/wallet.mp4" />
              </div>
              <div style={{ width: '300px', padding: '50px', backgroundColor: '#333', borderRadius: '10px', color: '#fff' }}>
                <h2>Make Your Investment</h2>
                <label style={{ fontSize: '1rem', color: '#ddd' }}>Investment Amount (USD)</label>
                <input
                  type="text"
                  value={investmentAmount}
                  onChange={handleInvestmentChange}
                  style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '4px' }}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <label style={{ fontSize: '1rem', color: '#ddd', marginTop: '10px' }}>Investor Agent Code (Optional)</label>
                <input
                  type="text"
                  value={agentCode}
                  onChange={handleAgentCodeChange}
                  style={{ width: '100%', padding: '10px', marginTop: '10px', borderRadius: '4px' }}
                />
                <button
                  onClick={checkAgentCode}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '10px',
                    backgroundColor: '#555',
                    color: '#fff',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Check Code
                </button>
                {/* Conditional rendering for agent code status */}
                {agentCodeStatus && (
                  <p style={{ color: agentCodeStatus === 'Valid code' ? 'green' : agentCodeStatus === 'Invalid code' ? 'red' : 'orange' }}>
                    {agentCodeStatus === 'Valid code' ? "The code is valid!" : agentCodeStatus === 'Invalid code' ? "The code is invalid!" : message}
                  </p>
                )}

                {/* Conditional rendering for the backend message */}
                {message && (
                  <div className="message" style={{ marginTop: '20px' }}>
                    <p>{message}</p>
                  </div>
                )}
                
                <button
                  onClick={handleInvestNow}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginTop: '20px',
                    backgroundColor: 'gold',
                    color: '#333',
                    fontSize: '1.2rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Invest Now
                </button>
              </div>
            </div>

            
            <p style={{
              fontSize: '1.6rem',
              lineHeight: '1.6',
              color: '#e0e0e0',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'justify',
            }}>
              Trilli On It Money Wallet is the only Hybrid Money Wallet in the world, capable of storing all digital financial assets, including fiat currencies, stocks, certificates, and cryptocurrencies.
              This wallet also functions as a digital bank card for the upcoming TRILLI ON BANK, featuring no bank fees, low transaction fees, and interest-free loans for indigenous communities.
              Users are rewarded with Trilli On Krypto Currency for every transaction made with the digital bank card.
              <br /><br />
              The Trilli On It Money Wallet incorporates advanced BIODIGICHEMWARE technology, built on the 3D PIRAMYD CYMATIC CELL SPINDLE platform, providing unmatched financial and data security.
              
              It empowers indigenous communities worldwide with secure, unhackable asset and data protection, fostering economic independence and control.
              The vision of "Trilli On It" is to bring financial power to the people, making a digital wallet that serves everyone, not just the elite few.
              <br/><br/>
              Again Trilli On It Money Wallet is yet another BIODIGICHEMWARE that possesses the Intrinsic Nature to traverse the 3D Cymatic Lattice BioDigital Architecture, which is the New Dawn Application of the now & future that is housed by the 3D PIRAMYD CYMATIC CELL SPINDLE TECHNOLOGY that is HYBRID CHAMELEON HARDWARE.
              <br/><br/>
              These otherworldly Technologies give unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.
              <br/><br/>
              As the Brand indelibly speaks, "Trilli On It" which translates directly to 8 Billion People possessing, sharing & controlling Trillions of Dollars worth of Currency, as opposed 1% of the World's populations possessing, controlling & not sharing it. Money Wallet in the fullness of what a Digital Wallet should do both now & the Future.
           

            </p>

          </section>
        </main>
      </div>

      <footer style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.0rem', color: '#9ca3af' }}>
          For any inquiries email us at: <a href="mailto:drhamza@trilliao.com">drhamza@trilliao.com</a>
        </h1>
        <br />
        <br />
      </footer>
      <Footer4 />
    </>
  );
}

export default Trillionit;