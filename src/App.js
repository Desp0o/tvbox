import {Routes,Route} from "react-router-dom";

import Main from "./pages/main/main";
import DevicePage from "./pages/devicePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ChannelsModal from "./components/channelsModal/channelsModal";
import Payment from "./pages/payment";
import Application from "./pages/application";
import SmartPhonesApp from "./pages/apps/smartphones";
import OtherTvBoxes from "./pages/apps/otherBoxes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<Main/>} />
        <Route exact path="/pages/devicePage" element={<DevicePage />} />
        <Route exact path="/pages/payment" element={<Payment />} />
        <Route exact path="/pages/application" element={<Application />} />
        <Route exact path="/pages/apps/smartphones" element={<SmartPhonesApp />} />
        <Route exact path="/pages/apps/otherBoxes" element={<OtherTvBoxes />} />
      </Routes>

      <ChannelsModal />
      <Footer />
    </>
  );
}

export default App;
