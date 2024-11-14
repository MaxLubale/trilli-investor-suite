import React from 'react';
import { useHistory } from 'react-router-dom';
import './productpage.css'; // Importing the CSS for styling

const ProductPage = () => {
    const history = useHistory();

    const handleInvestNow = () => {
        history.push('/payments'); // Redirect to the payments page
    };

    // Reusable Video Component with styling
    const VideoComponent = ({ src, className }) => (
        <video
            autoPlay
            loop
            muted
            playsInline
            className={className}
            style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
            }}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );

    return (
        <div className="product-page">
            <div className="header">
                <h1>3D BLOKCHAIN - BIODIGITAL SUPREMACY</h1>
            </div>

            <div className="content-container">
                {/* Video Section */}
                <div className="video-container">
                    <VideoComponent
                        src="https://trillion-funding-fqgv.onrender.com/uploads/blokchain.mp4"
                        alt="3D BLOKCHAIN - BIODIGITAL SUPREMACY"
                        
                    />
                 
                </div>
                
                {/* Text Section */}
                <div className="text-container">
                    <h1>Product Title</h1>
                    <p className="mb-6">
                        Is the Founding Groundbreaking 3D Cymatic Lattice, A.I Spindle Inner Cell, Vortex Harmonic Frequency Phasing, Age of Aquarius Knowledge, New Dawn Applications, Pyramid Technology, BIODIGICHEMWARE Blockchain Technology. What does this all mean?
                    </p>
                    <p className="mb-6">
                        It means that all Digital Technologies that are hashed to 3D BLOKCHAIN are augmented & therefore embellished by unprecedented BioDigiChemical Architecture that makes all Digital Technologies on the Blockchain impossible to hack!!
                        <br /><br />
                        Some of those Architectural Provisions are the "3D Cymatic Lattice Iso Zero Chains & 3D Cymatic Lattice Iso 1 Chains" that function in different Harmonic Phasing Frequencies, which means that a hacker would have to find which Chain 1 piece of Encryption Code is on in order to gain entry.
                    </p>
                    <p className="mb-6">
                        The problem is that there are Trillions of 3D Cymatic Lattice Cells, and therefore Trillions of Trillions of Spindles. Each Spindle is represented by a 3D Cymatic Lattice Zero Chain which in an Attosecond automatically reconfigures into a 3D Cymatic Lattice 1 Chain, which only has 1 code of the Encryption Key on it.
                    </p>
                    <p className="mb-6">
                        Not even 1 million Quantum Computers with A.I capability can hack this technology. Try finding a 3 Character Alphanumeric Encryption Code across Trillions of 3D Cells. A.I wouldn't even know where to start.
                    </p>
                    <p>
                        So the slogan for 3D BLOKCHAIN is aptly named "BIODIGITAL SUPREMACY".
                    </p>
                </div>
            </div>

            {/* Invest Now Button */}
            <button className="invest-button" onClick={handleInvestNow}>
                Invest Now
            </button>
        </div>
    );
};

export default ProductPage;
