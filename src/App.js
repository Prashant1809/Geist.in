import "./App.css";
import Navbar from "./Navbar";
import Home from "./Nav/Home";
import Beers from "./Nav/Beers";
import Visits from "./Nav/Visits";
import About from "./Nav/About";
import Experiences from "./Nav/Experiences";
import Shop from "./Nav/Shop";
import Instores from "./Nav/Instores";
import Ontap from "./Nav/Ontap";
import Learn from "./Nav/Learn";
import Ourlocations from "./Nav/Ourlocations";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div >
    
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/shops" element={<Shop />} />
        <Route path="/stores" element={<Instores />} />
        <Route path="/ontap" element={<Ontap />} />
        <Route path="/locations" element={<Ourlocations />} />
        <Route path="/learn" element={<Ourlocations />} />
        {/* <Route path= "/" element= {< />}  />
      <Route path= "/" element= {< />}  />
      <Route path= "/" element= {< />}  />
      <Route path= "/" element= {< />}  />
      <Route path= "/" element= {< />}  /> */}
      </Routes>
    </div>
  );
}

export default App;
