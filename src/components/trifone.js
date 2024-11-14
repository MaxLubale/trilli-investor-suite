import * as React from "react";
import { useNavigate } from 'react-router-dom';
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



function Trifone() {
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
  
    // Now you can use history.push() to pass the amount in the state
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
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>TRI FONE </h1>
        </header>

        <main style={{ marginTop: '5rem', width: '90%' }}>
          <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '70px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
              <div style={{ width: '50%' }}>
                <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/trifon.mp4" />
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
            
              <p style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#e0e0e0', padding: '15px', borderRadius: '8px', textAlign: 'justify' }}>
                The Global Game Changer in Mobile Phones that features HYBRID CHAMELEON HARDWARE capability to charge itself when left in the Sun & or the Moonlight!!!! Which means no-more Electricity requirements regardless of your location.
                In actual fact, NEO TRILLI AO are currently developing a Wireless Electricity Device that also simultaneously broadcasts both a Wireless I.T Network, and a Wireless Telecommunications Network that will make Data Coverage Limitless!!!! PEIZO Electricity is Non-Pernicious, which means it does not harm the body, in actual fact it does the complete opposite, it HEALS the Body!!!!
                <br></br>    <br></br>

                As with all PEIZO Community & Commercial Products, "TRI" epitomises & consolidates the following 4 Security & Privacy Protection Provisions Globally for the Individual & Family alike.
                Personal Privacy Protection Which means Peizo & Developers NEO TRILLI AO at no time whatsoever, sell your Personal Information to 3rd Party Operators. It also means that under no circumstances whatsoever do we disclose your Personal Information to Governments & or Authorities for their corrupt purposes!!
                <br/><br/>
                Your Geo Location is only ever recorded & monitored when you initiate TRAVEL SAFE APP. Your Video is only ever recorded & monitored when you initiate TRAVEL SAFE APP. Your Audio is only ever recorded & monitored when you initiate TRAVEL SAFE APP.
                <br/><br/>
                HYBRID CHAMELEON HARDWARE is an Unprecedented Unhackable Age of Aquarius Knowledge & New Dawn Application espoused to the World as Piramyd Technology. The otherworldly Technology present in TRI FONE grants unprecedented Financial Privileges to Indigenous Communities WorldWide via both Unhackable Financial Asset Security & Unhackable Personal Data Protection.

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


export default Trifone;