import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import TruckBanner from "./Components/Truckbanner";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";
import CallButton from "./Components/Callbutton";
import Home from "./Components/pages/Home";
import AboutPage from "./Components/pages/AboutPage";
import ProductsPage from "./Components/pages/ProductsPage";
import ProjectsPage from "./Components/pages/ProjectsPage";
import ContactPage from "./Components/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <TruckBanner /> */}
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </BrowserRouter>
  );
}

export default App;
