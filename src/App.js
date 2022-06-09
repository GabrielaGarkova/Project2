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

import {useCurrentUser} from "./graphql/useRequest";

const routes = [
    {
        path: '/',
        element: <Home/>
    },

    {
        path: '/Vacantion',
        element: <Vacantion/>
    },
    {
        path: '/Landmarks',
        element: <Landmarks/>
    },
    {
        path: '/Contacts',
        element: <Contacts/>
    },
]

function App() {
  return (
    <BrowserRouter>
    <Default/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vacantion" element={<Vacantion />} />
        <Route path="/landmarks" element={<Landmarks />} />
        <Route path="/contacts" element={<Contacts />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
