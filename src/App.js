import {Routes,Route} from "react-router-dom";

import Main from "./pages/main/main";
import DevicePage from "./pages/devicePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ChannelsModal from "./components/channelsModal/channelsModal";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<Main/>} />
        <Route exact path="/pages/devicePage" element={<DevicePage />} />
      </Routes>

      <ChannelsModal />
      <Footer />
    </>
  );
}

export default App;
