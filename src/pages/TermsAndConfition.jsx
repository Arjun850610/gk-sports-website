import React, { useEffect } from "react";
import PointsDiv from "../components/common/PointsDiv";
import Heading from "../components/common/Heading";

const TermsAndConfition = () => {
  const data = [
    {
      heading: "Introduction",
      description:
        "Thank you for using GK Esports (GKMS INFOTECH LLP), a platform that allows users to participate in Free Fire tournaments for a chance to win prizes. By accessing or using the GK Esports app, you agree to comply with these terms.",
    },
    {
      heading: "User Account",
      description:
        "To participate in tournaments, you must create a user account by providing accurate and complete information. You are responsible for keeping your account information up-to-date and secure.",
    },
    {
      heading: "Eligibility",
      description:
        "You must be at least 18 years old (or the legal age of majority in your jurisdiction) to use this app and participate in tournaments. Participation may also be restricted based on your location or local laws.",
    },
    {
      heading: "Tournament Participation",
      description:
        "You can register for tournaments after paying the entry fee. Upon registration, you will receive a room ID and password to join the tournament. Cheating or unfair conduct will lead to disqualification.",
    },
    {
      heading: "Payment and Fees",
      description:
        "Entry fees are non-refundable once a tournament has started. Prize payouts will be processed according to the app's payment methods, subject to transaction fees.",
    },
    {
      heading: "User Conduct",
      description:
        "You agree to conduct yourself respectfully during tournaments and avoid behavior that disrupts others. Cheating, harassment, or offensive language may lead to disqualification and account suspension.",
    },
    {
      heading: "Intellectual Property",
      description:
        "All intellectual property rights related to the app, including trademarks and logos, are owned by GK Esports. Any content you submit remains your property, but you grant us a license to use it for app operations.",
    },
    {
      heading: "Privacy",
      description:
        "We collect personal information for registration and payment processing. Your personal data will be handled according to our Privacy Policy, which is available in the app.",
    },
    {
      heading: "Disputes and Termination",
      description:
        "Disputes will be resolved informally first, and if needed, according to the laws of your jurisdiction. We reserve the right to suspend or terminate accounts for violation of these terms.",
    },
    {
      heading: "Limitation of Liability",
      description:
        "The app is provided on an 'as-is' basis, and we are not responsible for any damages or losses arising from its use. Our liability is limited to the amount paid for participation in the tournament.",
    },
    {
      heading: "Amendments",
      description:
        "We reserve the right to update or modify these Terms and Conditions. Any changes will be posted within the app, and continued use constitutes acceptance of the new terms.",
    },
    {
      heading: "Contact Information",
      description:
        "For questions about these Terms and Conditions, please contact us at: Email: gkmsinfotech@gmail.com, Phone: 7856070535.",
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
