import React, { useEffect } from "react";
import Heading from "../components/common/Heading";
import PointsDiv from "../components/common/PointsDiv";

const RefundAndCancellation = () => {
  const refundCancellationData = [
    {
      heading: "Cancellation of Tournament Participation",
      description:
        "You may cancel your registration for a tournament before the tournament begins and receive a full refund of your entry fee, provided no room ID or password has been provided.",
    },
    {
      heading: "Refund Eligibility",
      description:
        "Refunds will only be considered if the tournament is cancelled before it begins or if a technical issue prevents participation after payment has been processed.",
    },
    {
      heading: "Refund Process",
      description:
        "If you are eligible for a refund, it will be credited to your original payment method. Refunds may take 5-7 business days to process depending on your payment provider.",
    },
    {
      heading: "Non-Refundable Fees",
      description:
        "Certain third-party transaction fees, such as payment processing fees, may not be refundable and will be deducted from the refunded amount.",
    },
    {
      heading: "Late Cancellations",
      description:
        "Once the tournament has started and you have received a room ID and password, no cancellations or refunds will be allowed.",
    },
    {
      heading: "Refund Processing Time",
      description:
        "Refunds will be processed within 5-7 business days, and refunds may only be granted if cancellation or issues are reported within 48 hours of the tournament start time.",
    },
    {
      heading: "No Refunds for Prize-Related Issues",
      description:
        "Refunds will not be issued for disputes related to tournament results, prize payouts, or disqualification due to violations of terms and conditions.",
    },
    {
      heading: "How to Request a Refund or Cancellation",
      description:
        "You can submit a request for cancellation or refund through the app's 'Help & Support' section or by contacting customer support at gkmsinfotech@gmail.com or 7856070535.",
    },
    {
      heading: "Modifications to This Policy",
      description:
        "We reserve the right to update or modify this Refund and Cancellation Policy at any time. Changes will be reflected in the app and effective immediately upon posting.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="custom-container !pt-28 lg:pt-32 flex flex-col gap-5 lg:gap-8">
      <Heading Heading={"Refund & Cancellation Policy"} />
      <div className="flex flex-col gap-6">
        {refundCancellationData?.map((item, index) => (
          <PointsDiv data={item} key={index} />
        ))}
      </div>
    </main>
  );
};

export default RefundAndCancellation;
