import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { ContactPage } from "../Pages/ContactPage";
import { AboutPage } from "../Pages/AboutPage";
import Navbar from "../Component/Navbar";
import { Footer } from "../Component/Footer";

function UserRoutes() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default UserRoutes;
