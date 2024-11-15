import React from 'react';
import { useNavigate} from 'react-router-dom';
import Navbar8 from './navbar8';
import Footer4 from './footer4';

function VideoComponent({ src, className }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      webkit-playsinline
      className={className}
      style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}



function Trillipay() {
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
        <header style={{ paddingLeft: '1.5rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, gold, gold)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>Trilli Pay</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '90%' }}>
          <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '70px', flexWrap: 'wrap' }}>
            {/* Video and Form Side by Side */}
            
            <div style={{ width: "100%", maxWidth: "600px" }}>
                <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/trillipay.mp4" />
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
           

              <p style={{
                fontSize: '1.6rem',
                lineHeight: '1.6',
                color: '#e0e0e0',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'justify',
              }}>
                A Payment Gateway that Benefits Indigenous Peoples Globally. Every Transaction only costs 1 cent USD & every 3 cents worth of Transactions will reward you with 1 Minted Peizo of TrilliOn Krypto Kurrency. TRILLI PAY is the most cost-effective Payment Gateway in the World, and every cent goes towards substantiating Interest-Free Loans for Indigenous Peoples Globally via TRILLI ON BANK.
                <br></br>                <br></br>

                TRILLI PAY is a BIODIGICHEMWARE, which means it can traverse outdated current technologies, and simultaneously seamlessly travelling inside the Future of A.I Cellular Quantum PIRAMYD 3D Cymatic Lattice Technology that is HYBRID CHAMELEON HARDWARE, the specifically designed outlier A.I Quantum Computing Hardware it was created for. No other Digital Financial Technologies can make the migration onto & into HYBRID CHAMELEON HARDWARE.
                These otherworldly Technologies give unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.
                <br/><br/>
                MONEY 4 MASSES is a reverberating slogan moniker perfect for the provisions that TRILLI PAY brings to Indigenous Peoples Globally.

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


export default Trillipay;
