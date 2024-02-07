import { Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navboar from "./Pages/Navboar";
import './App.css'

const App = () => {
  return (
    <div>
      <Navboar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
