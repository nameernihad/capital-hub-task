import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { ContactPage } from "../Pages/ContactPage";
import { AboutPage } from "../Pages/AboutPage";
import Navbar from "../Component/Navbar";

function UserRoutes() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default UserRoutes;
