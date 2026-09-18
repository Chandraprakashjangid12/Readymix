import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToHash from "./Components/ScrollToHash";
// import TruckBanner from "./Components/TruckBanner";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";
import CallButton from "./Components/CallButton";
import Home from "./Components/pages/Home";
import AboutPage from "./Components/pages/AboutPage";
import ProductsPage from "./Components/pages/ProductsPage";
import ProjectsPage from "./Components/pages/ProjectsPage";
import ContactPage from "./Components/pages/ContactPage";
// import Scrolling from "./Components/scrolling";
import ScrollToTop from "./Components/scrolling";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <TruckBanner /> */}
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <CallButton />
    </BrowserRouter>
  );
}

export default App;
