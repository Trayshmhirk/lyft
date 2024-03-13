import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/home";
import DriverRoute from "./page/driverPage/driverRoute";
import RiderRoute from "./page/riderPage/riderRoute";
import BusinessPageRoute from "./page/businessPage/businessPageRoute";

function App() {
   return (
      <div className="App h-screen">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="driver/*" element={<DriverRoute />} />
            <Route path="rider/*" element={<RiderRoute />} />
            <Route path="business/*" element={<BusinessPageRoute />} />
         </Routes>
      </div>
   );
}

export default App;
