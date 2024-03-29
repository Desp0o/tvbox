import {Routes,Route} from "react-router-dom";

import DevicePage from "./pages/devicePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ChannelsModal from "./components/channelsModal/channelsModal";
import Payment from "./pages/payment";
import Application from "./pages/application";
import SmartPhonesApp from "./pages/apps/smartphones";
import OtherTvBoxes from "./pages/apps/otherBoxes";
import SmartTvApp from "./pages/apps/smartTvApp";
import FAQ from "./pages/faq";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<HomeScreen/>} />

        <Route exact path="/pages/devicePage" element={<DevicePage />} />
        <Route exact path="/pages/payment" element={<Payment />} />
        <Route exact path="/pages/application" element={<Application />} />
        <Route exact path="/pages/apps/smartphones" element={<SmartPhonesApp />} />
        <Route exact path="/pages/apps/otherBoxes" element={<OtherTvBoxes />} />
        <Route exact path="/pages/apps/smartTvApp" element={<SmartTvApp />} />
        <Route exact path="/pages/faq" element={<FAQ />} />
      </Routes>

      <ChannelsModal />
      <Footer />
    </>
  );
}

export default App;