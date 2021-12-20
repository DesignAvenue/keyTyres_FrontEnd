import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import ContactUs from './pages/contact_us';
import Shop from './pages/shop';

function App() {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
