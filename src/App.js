import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Pages/Home";
import Cryptocurrencies from "./component/Pages/Cryptocurrencies"
import News from "./component/Pages/News"
import CryptoDetail from "./component/Pages/CryptoDetail"

import "./index.css";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route exact path="/cryptodetail/:id" element={<CryptoDetail/>} />
          <Route exact path="/news" element={<News />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}
