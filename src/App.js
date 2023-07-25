import {Routes,Route} from "react-router-dom";

import Main from "./pages/main/main";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="*" element={<Main/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
