import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Prestations from "./pages/Prestations";
import Entreprises from "./pages/Entreprises";
import Particuliers from "./pages/Particuliers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/pour-les-entreprises" element={<Entreprises />} />
            <Route path="/pour-les-particuliers" element={<Particuliers />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
