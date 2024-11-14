import React, { useState, useCallback } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';
import Navbar8 from "./navbar8";
import Footer4 from "./footer4";
function Message({ content }) {
  return <p>{content}</p>;
}

function Pay() {
  const location = useLocation();
  const investmentAmount = location.state?.investmentAmount || 0; // Get the investment amount from the passed state

  const initialOptions = {
    "client-id": "AVHYihaycXL5TMKmo69MGA3YWoVkeftXsqGHZ17ZLHjSE3_N-4LzMfGKNugxB_pjxcG2Avdg7U1dQrEB",
    currency: "USD",
  };

  const [message, setMessage] = useState("");
  const [isLoading] = useState(false);
  const [isTransactionSuccessful, setIsTransactionSuccessful] = useState(false); // State for success message


  const createOrder = useCallback(async (data, actions) => {
    if (!investmentAmount || investmentAmount <= 0) {
      setMessage("Invalid investment amount.");
      return actions.reject(); // Reject if no valid amount
    }

    const itemTotal = investmentAmount; // Using the investment amount as the total

    const taxTotal = 0.00;
    const shipping = 0.00;
    const handling = 0.00;
    const insurance = 0.00;
    const shippingDiscount = 0.00;

    const totalAmountBeforeDiscount = itemTotal + taxTotal + shipping + handling + insurance - shippingDiscount;

    // Remove promo code logic, no discount applied here
    const finalAmount = totalAmountBeforeDiscount.toFixed(2);

    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: finalAmount,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: itemTotal.toFixed(2),
            },
            tax_total: {
              currency_code: "USD",
              value: taxTotal.toFixed(2),
            },
            shipping: {
              currency_code: "USD",
              value: shipping.toFixed(2),
            },
            handling: {
              currency_code: "USD",
              value: handling.toFixed(2),
            },
            insurance: {
              currency_code: "USD",
              value: insurance.toFixed(2),
            },
            shipping_discount: {
              currency_code: "USD",
              value: shippingDiscount.toFixed(2),
            },
          },
        },
        items: [{
          name: "Investment Amount",
          unit_amount: {
            currency_code: "USD",
            value: investmentAmount.toFixed(2),
          },
          quantity: "1",
        }],
      }],
    });
  }, [investmentAmount]);

  return (
    <>
    <Navbar8 />
      <div className="Pay">
        <PayPalScriptProvider options={initialOptions}>
          <div className="paypal-button-container">
            <PayPalButtons
              style={{
                shape: "pill",
                layout: "vertical",
                color: "gold",
                label: "paypal",
                height: 55,
                width: 300,
              }}
              createOrder={createOrder}
              disabled={isLoading || investmentAmount <= 0}
              onApprove={async (data, actions) => {
                try {
                  const response = await fetch(
                    `https://trillion-funding-fqgv.onrender.com/api/orders/${data.orderID}/capture`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  const orderData = await response.json();

                  if (orderData.status === "COMPLETED") {
                    const transaction = orderData.purchase_units[0].payments.captures[0];
                    const shippingAddress = orderData.purchase_units[0].shipping.address;
                    const customerName = orderData.payer.name.given_name + " " + orderData.payer.name.surname;

                    setMessage(
                      `Transaction ${transaction.status}: ${transaction.id}. `
                    );
                    setIsTransactionSuccessful(true);

                    // Assuming you have an email confirmation function:
                    // sendEmailConfirmation(transaction, shippingAddress, customerName);

                    console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
                  } else {
                    throw new Error(`Failed to capture PayPal payment`);
                  }
                } catch (error) {
                  console.error(error);
                  setMessage(`Sorry, your transaction could not be processed...${error}`);
                  setIsTransactionSuccessful(false);
                }
              }}
            />
          </div>
        </PayPalScriptProvider>
        {/* Success Message */}
        {isTransactionSuccessful && (
          <Message
            content="Your payment was successful!"
            style={{ color: 'gold', fontWeight: 'bold', fontSize: '20px' }} // Gold text style
          />
        )}
        
        {/* Error or General Message */}
        {!isTransactionSuccessful && message && (
          <Message
            content={message}
            style={{ color: 'red', fontWeight: 'bold' }} // Red text for error or general messages
          />
        )}
      </div>
      <Footer4 />
    </>
  );
}

export default Pay;
