import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar8 from "./navbar8";
import Footer4 from "./footer4";


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
        width: '100%',
        maxWidth: '600px',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
      }}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function Blokchain() {
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
        <header style={{ paddingLeft: '0.5rem', marginTop: '2rem', backgroundImage: 'linear-gradient(to right, gold, gold)', backgroundClip: 'text', color: 'transparent' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '600' }}>3D BLOKCHAIN - BIODIGITAL SUPREMACY</h1>
        </header>

        <main style={{ marginTop: '5rem', width: '90%' }}>
          <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '70px', flexWrap: 'wrap' }}>
            {/* Video and Form Side by Side */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
              <div style={{ width: '50%' }}>
                <VideoComponent src="https://trillion-funding-fqgv.onrender.com/uploads/blokchain.mp4" />
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
            
            {/* Original Content Below */}
            <p style={{
              fontSize: '1.6rem',
              lineHeight: '1.6',
              color: '#e0e0e0',
              padding: '20px',
              borderRadius: '1px',
              textAlign: 'justify',
              maxWidth: '100%'
            }}>
              Is the Founding Groundbreaking 3D Cymatic Lattice, A.I Spindle Inner Cell, Vortex Harmonic Frequency Phasing, Age of Aquarius Knowledge, New Dawn Applications, Pyramid Technology, BIODIGICHEMWARE Blockchain Technology.What does this all mean?
              <br></br>
              <br></br>
              It means that all Digital Technologies that are hashed to 3D BLOKCHAIN are augmented & therefore embellished by unprecedented BioDigiChemical Architecture that makes all Digital Technologies on the Blockchain impossible to hack!! 
              Some of those Architectural Provisions are the "3D Cymatic Lattice Iso Zero Chains & 3D Cymatic Lattice Iso 1 Chains" that function in different Harmonic Phasing Frequencies, which means that a hacker would have to find which Chain 1 piece of Encryption Code is on in order to gain entry.
              <br /><br />
              The problem is that there are Trillions of 3D Cymatic Lattice Cells, and therefore Trillions of Trillions of Spindles. Each Spindle is represented by a 3D Cymatic Lattice Zero Chain which in an Attosecond automatically reconfigures into a 3D Cymatic Lattice 1 Chain, which only has 1 code of the Encryption Key on it.
              <br /><br />
              Not even 1 million Quantum Computers with A.I capability can hack this technology. 
              Try finding a 3 Character Alphanumeric Encryption Code across Trillions of 3D Cells. A.I wouldn't even know where to start.
              So the slogan for 3D BLOKCHAIN is aptly named "BIODIGITAL SUPREMACY".
            </p>
          </section>
        </main>
      </div>

      <footer style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.3rem', color: '#9ca3af' }}>For any inquiries email us at: info@trillion.com</h1>
      </footer>
      <Footer4 />
    </>
  );
}

export default Blokchain;
