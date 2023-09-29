import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ChannelsModal from "./components/channelsModal/channelsModal";

// Lazy-loaded components
const Main = lazy(() => import("./pages/main/main"));
const DevicePage = lazy(() => import("./pages/devicePage"));
const Payment = lazy(() => import("./pages/payment"));
const Application = lazy(() => import("./pages/application"));
const SmartPhonesApp = lazy(() => import("./pages/apps/smartphones"));
const OtherTvBoxes = lazy(() => import("./pages/apps/otherBoxes"));
const SmartTvApp = lazy(() => import("./pages/apps/smartTvApp"));
const FAQ = lazy(() => import("./pages/faq"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="*" element={<Main />} />
          <Route exact path="/pages/devicePage" element={<DevicePage />} />
          <Route exact path="/pages/payment" element={<Payment />} />
          <Route exact path="/pages/application" element={<Application />} />
          <Route exact path="/pages/apps/smartphones" element={<SmartPhonesApp />} />
          <Route exact path="/pages/apps/otherBoxes" element={<OtherTvBoxes />} />
          <Route exact path="/pages/apps/smartTvApp" element={<SmartTvApp />} />
          <Route exact path="/pages/faq" element={<FAQ />} />
        </Routes>
      </Suspense>
      <ChannelsModal />
      <Footer />
    </>
  );
}

export default App;
