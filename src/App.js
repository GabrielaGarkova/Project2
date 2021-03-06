 import {
   BrowserRouter,
   Routes,
   Route
 } from "react-router-dom";

import Home from "./pages/Home";
import Vacantion from "./pages/Vacantion"; 
import Landmarks from "./pages/Landmarks";
import Contacts from "./pages/Contacts";
import Default from "./layouts/Default";
import HotelDetails from "./pages/HotelDetails";

function App() {
  return (
    <BrowserRouter>
    <Default/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vacantion" element={<Vacantion />} />
        <Route path="/landmarks" element={<Landmarks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
