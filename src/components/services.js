import React from "react";
import './services.css'; // Include this line to add custom CSS styles
import { Link } from 'react-router-dom';


export const Services = () => {
  const products = [
    {
      src: "https://trillion-funding-fqgv.onrender.com/uploads/blokchain.mp4",
      title: "3D BLOKCHAIN - BIODIGITAL SUPREMACY",
      url: "/blokchain",
    },
    {
      src: "https://trillion-funding-fqgv.onrender.com/uploads/trillipay.mp4",
      title: "TRILLI PAY",
      url: "/trillipay",
    },
    {
      src: "https://trillion-funding-fqgv.onrender.com/uploads/bank.mp4",
      title: "TRILLI ON BANK",
      url: "/trillionbank",
    },
    {
      src: "https://trillion-funding-fqgv.onrender.com/uploads/wallet.mp4",
      title: "TRILLI ON IT - MONEY WALLET",
      url: "/trillionit",
    },
    {
      src: "https://trillion-funding-fqgv.onrender.com/uploads/trifon.mp4",
      title: "TRI FONE ",
      url: "/trifone",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Products</h2>
          <br/>
          <p>
           
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="service-desc">
                <video width="100%" height="auto" autoPlay loop muted>
                  <source src={product.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3>{product.title}</h3>
                <p>
                <Link 
    to={product.url} 
    className="flex justify-center px-11 py-2 mt-14 text-white bg-yellow-500 rounded-xl text-center hover:bg-yellow-600 transition-colors duration-300 max-md:px-8 max-md:mt-10"
>
    <p className="font-semibold">LEARN MORE!</p>
</Link>

                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
