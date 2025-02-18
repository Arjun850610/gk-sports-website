import React, { useEffect } from "react";
import Heading from "../components/common/Heading";
import PointsDiv from "../components/common/PointsDiv";

const PrivacyPolicy = () => {
  const privacyPolicyData = [
    {
      heading: "Privacy Policy for GK Esports App",
      description:
        "At GK Esports (GKMS INFOTECH LLP), we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and how we protect it when you use our app, GK Esports (GKMS INFOTECH LLP). By accessing or using the App, you consent to the collection and use of your information as described in this Privacy Policy.",
    },
    {
      heading: "Information We Collect",
      description:
        "We collect personal information such as your name, email address, phone number, date of birth, and payment details when you use the GK Esports app. We may also collect usage data and device information for improving your experience.",
    },
    {
      heading: "How We Use Your Information",
      description:
        "We use the information we collect to manage your account, process tournament registrations, send communications, personalize your experience, provide customer support, and ensure compliance with legal requirements.",
    },
    {
      heading: "How We Protect Your Information",
      description:
        "We take reasonable measures to protect your personal data from unauthorized access, alteration, or disclosure. Payment information is processed securely through third-party providers using encryption protocols.",
    },
    {
      heading: "Sharing Your Information",
      description:
        "We may share your information with third-party service providers who help us operate the app, process payments, or provide customer support. We may also share your information if required by law or during a business transfer.",
    },
    {
      heading: "Your Rights and Choices",
      description:
        "You can access, update, or delete your personal information at any time through the app. You can also opt-out of marketing communications or adjust your cookie settings.",
    },
    {
      heading: "International Data Transfers",
      description:
        "Your information may be transferred to and processed in countries with different data protection laws than your own. By using the app, you consent to this transfer.",
    },
    {
      heading: "Children's Privacy",
      description:
        "The GK Esports app is not intended for children under 18. We do not knowingly collect personal information from children. If we become aware of such information, we will delete it as quickly as possible.",
    },
    {
      heading: "Changes to This Privacy Policy",
      description:
        "We may update this Privacy Policy from time to time. Any changes will be communicated through the app, and continued use signifies acceptance of the updated policy.",
    },
    {
      heading: "Contact Us",
      description:
        "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at gkmsinfotech@gmail.com or call us at 7856070535.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="custom-container !pt-28 lg:pt-32 flex flex-col gap-5 lg:gap-8">
      <Heading Heading={"Privacy Policy"} />
      <div className="flex flex-col gap-6">
        {privacyPolicyData?.map((item, index) => (
          <PointsDiv data={item} key={index} />
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
