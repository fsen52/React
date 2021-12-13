import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Menu from "./components/shared/Menu";
function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
