import React from "react";
import Heading from "../common/Heading";

import paytm from "../../assets/paytm.png";
import upi from "../../assets/upi.png";
import cashfree from "../../assets/cashfree.png";
import phonepe from "../../assets/phonepe.webp";

const PaymentPartners = () => {
  const partners = [
    {
      name: "Paytm",
      image: paytm,
    },
    {
      name: "UPI",
      image: upi,
    },
    {
      name: "Cashfree",
      image: cashfree,
    },
    {
      name: "PhonePe",
      image: phonepe,
    },
  ];

  return (
    <div id="payment-partners" className="custom-container">
      <div className="flex flex-col gap-5 lg:gap-8">
        <Heading Heading={"PAYMENT PARTNERS"} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-white hover:text-gray-300 flex flex-col items-center gap-2 " // Adjust colors
            >
              <img src={partner?.image} alt={partner?.name} className="w-full h-36 object-contain" />
              <p className="text-xl font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPartners;
