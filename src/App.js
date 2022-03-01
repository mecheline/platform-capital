import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { AboutUsPage } from "./screens/AboutUsPage";
import { OurTeamPage } from "./screens/OurTeamPage";
import { PortfolioPage } from "./screens/PortfolioPage";
import { InvestorPortalPage } from "./screens/InvestorPortalPage";
import { MediaPage } from "./screens/MediaPage";
import { ContactUsPage } from "./screens/ContactUsPage";
import { Footer } from "./components/Footer";
import { GoToTop } from "./components/GoToTop";
import { FloatingButton } from "./components/FloatingButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/team" element={<OurTeamPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/investor" element={<InvestorPortalPage />}></Route>
        <Route path="/media" element={<MediaPage />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
      </Routes>
      <FloatingButton />
      <GoToTop />
      <Footer />
    </Router>
  );
}

export default App;
