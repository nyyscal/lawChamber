import { Route, Routes } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footers from "./components/Footers";
import Gap from "./components/Gap";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Gap />
      <Footers />
    </>
  );
}

export default App;
