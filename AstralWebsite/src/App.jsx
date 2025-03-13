
import "./assets/styles/styles.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AstralPage from "./components/AstralPage";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AstralPage />} />
        <Route path="/about" element={<Aboutn />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

