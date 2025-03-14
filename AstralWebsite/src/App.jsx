
import "./assets/styles/styles.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Purpose from "./pages/Purpose";
import Explore from "./pages/Explore";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purpose" element={<Purpose/>} />
        <Route path="/Explore" element={<Explore/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

