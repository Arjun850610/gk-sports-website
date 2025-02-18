import React, { useEffect } from "react";
import Heading from "../components/common/Heading";
import PointsDiv from "../components/common/PointsDiv";

const PrivacyPolicy = () => {
  const privacyPolicyData = [
    {
      heading: "Introduction",
      description:
        "This Privacy Policy explains how we collect, use, and protect your personal information when you use the Gametosa platform. By using our services, you agree to the terms outlined in this policy.",
    },
    {
      heading: "Data Collection",
      description:
        "We collect personal information such as your name, email, and payment details when you use our services. We may also collect usage data to improve our platform.",
    },
    {
      heading: "How We Use Your Data",
      description:
        "Your data is used to provide, personalize, and improve our services, communicate with you, process payments, and ensure security and compliance with applicable laws.",
    },
    {
      heading: "Data Sharing",
      description:
        "We do not sell or rent your personal data. We may share your information with trusted third-party service providers who assist us in delivering our services, under strict confidentiality agreements.",
    },
    {
      heading: "Cookies and Tracking Technologies",
      description:
        "We use cookies and other tracking technologies to enhance your experience on our platform, track user behavior, and deliver personalized content. You can manage cookie settings through your browser.",
    },
    {
      heading: "Data Security",
      description:
        "We take data security seriously and implement industry-standard measures to protect your information. However, no method of transmission over the internet is 100% secure.",
    },
    {
      heading: "Data Retention",
      description:
        "We retain your personal data for as long as necessary to provide services or as required by law. You can request the deletion of your data in accordance with our policy.",
    },
    {
      heading: "Children's Privacy",
      description:
        "Our services are not intended for children under 16. We do not knowingly collect personal data from children. If we become aware of such data collection, we will delete it immediately.",
    },
    {
      heading: "Your Rights",
      description:
        "You have the right to access, correct, or delete your personal data. You can also opt out of marketing communications and manage your preferences through your account settings.",
    },
    {
      heading: "Changes to This Privacy Policy",
      description:
        "We may update this Privacy Policy to reflect changes in our practices or services. Any updates will be posted on this page, and the date of the last update will be indicated at the bottom of the policy.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="custom-container !pt-28 lg:pt-32 flex flex-col gap-5 lg:gap-8">
      <Heading Heading={"Terms & Conditions"} />
      <div className="flex flex-col gap-6">
        {privacyPolicyData?.map((item, index) => (
          <PointsDiv data={item} key={index} />
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
