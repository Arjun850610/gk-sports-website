import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import MainFooter from "./components/footer/MainFooter";
import Home from "./pages/Home";
import TermsAndConfition from "./pages/TermsAndConfition";
import RefundAndCancellation from "./pages/RefundAndCancellation";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConfition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/refund-cancellation-policy"
          element={<RefundAndCancellation />}
        />
      </Routes>
      <MainFooter />
    </Router>
  );
};

export default App;
