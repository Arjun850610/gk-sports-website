import React, { useEffect } from "react";
import Heading from "../components/common/Heading";
import PointsDiv from "../components/common/PointsDiv";

const RefundAndCancellation = () => {
  const refundCancellationData = [
    {
      heading: "Refund Eligibility",
      description:
        "Refunds are only available under specific conditions, such as service failure or incorrect billing. Please refer to the specific service's terms for details.",
    },
    {
      heading: "Cancellation Process",
      description:
        "To cancel a service, contact support within the specified period. The process for cancellations varies depending on the service and will be handled according to the terms.",
    },
    {
      heading: "Refund Method",
      description:
        "Refunds will be processed via the same payment method used during purchase. The time taken for the refund to reflect in your account depends on the payment processor.",
    },
    {
      heading: "Non-Refundable Items",
      description:
        "Certain services, such as digital content or items redeemed with Gold Coins, are non-refundable. Please refer to the service-specific terms for exclusions.",
    },
    {
      heading: "Late Cancellations",
      description:
        "Cancellation requests made after the service period or beyond the allowable cancellation window may not be eligible for a refund.",
    },
    {
      heading: "Refund Processing Time",
      description:
        "Refunds will be processed within 5-10 business days. Delays may occur depending on the payment method and the nature of the refund request.",
    },
    {
      heading: "Partial Refunds",
      description:
        "Partial refunds may be issued for services that have been partially used, as per the refund policy. The calculation will depend on the terms of the service.",
    },
    {
      heading: "Subscription Cancellation",
      description:
        "For subscription-based services, cancellations must be made before the next billing cycle to avoid additional charges. No partial refund is given for unused time.",
    },
    {
      heading: "Refund Disputes",
      description:
        "In case of a dispute regarding a refund, you may contact our support team. We will review your case and provide a resolution based on the applicable policy.",
    },
    {
      heading: "Refund for Promotional Services",
      description:
        "Services obtained through promotional offers or discounts may be subject to different refund terms. Please review the promotional terms for specific refund conditions.",
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
