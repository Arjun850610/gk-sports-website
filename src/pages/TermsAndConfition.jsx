import React, { useEffect } from "react";
import PointsDiv from "../components/common/PointsDiv";
import Heading from "../components/common/Heading";

const TermsAndConfition = () => {
  const data = [
    {
      heading: "Introduction",
      description:
        "These Terms and Conditions govern your use of the Gametosa website and app. By using the services, you agree to comply with these terms.",
    },
    {
      heading: "Will These Terms Ever Change?",
      description:
        "We may update the Terms as we improve our services. Changes will be communicated via email or on the website.",
    },
    {
      heading: "What About My Privacy?",
      description:
        "We take user privacy seriously. Please refer to our Privacy Policy. We do not collect personal data from children under 16.",
    },
    {
      heading: "About Tournaments",
      description:
        "Tournaments are organized by third-party entities and governed by their respective rules. Gametosa does not sponsor individual tournaments.",
    },
    {
      heading: "About Gametosa Promotions",
      description:
        "Gametosa may sponsor promotions related to tournaments. These promotions will be governed by the respective rules published by Gametosa.",
    },
    {
      heading: "About Prizes",
      description:
        "Prizes may be provided according to promotion rules. All winners must be verified by Gametosa. Decisions related to prize administration are final.",
    },
    {
      heading: "About Gametosa NFTs",
      description:
        "NFTs can be created and traded on the platform. Terms regarding creation, purchase, and use can be found on the NFT page.",
    },
    {
      heading: "What are My Rights in Gametosa?",
      description:
        "Content on the platform is owned by Gametosa or its licensors and is protected by copyright laws.",
    },
    {
      heading: "Will Gametosa Ever Change the Services?",
      description:
        "Gametosa reserves the right to modify, suspend, or discontinue any service features at any time.",
    },
    {
      heading: "Does Gametosa Cost Anything?",
      description:
        "Some services are free, but we may introduce fees for certain services, processed through third-party payment processors.",
    },
    {
      heading: "What Are Gold Coins?",
      description:
        "Gold Coins are purchased and used for item redemption. They are non-transferable and non-refundable except as required by app store policies.",
    },
    {
      heading: "What Are NFTs?",
      description:
        "NFTs are non-fungible tokens linked to content like artwork or game images. They can be created and traded on the platform.",
    },
    {
      heading: "Acceptable Website Use",
      description:
        "Users cannot violate site security, transmit harmful material, or engage in unlawful conduct. Violations may lead to legal action.",
    },
    {
      heading: "Liability",
      description:
        "Gametosa is not liable for damages from using the services. The liability is limited to the amount paid by the user for services.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="custom-container !pt-28 lg:pt-32 flex flex-col gap-5 lg:gap-10">
      <Heading Heading={"Terms & Conditions"} />
      <div className="flex flex-col gap-6">
        {data?.map((item, index) => (
          <PointsDiv data={item} key={index} />
        ))}
      </div>
    </main>
  );
};

export default TermsAndConfition;
