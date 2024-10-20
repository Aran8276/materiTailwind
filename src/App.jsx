import "./App.css";
import "./assets/staylebaru.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Beranda from "./pages/beranda/Beranda";
import Product from "./pages/product/Product";
import Negara from "./pages/negara/Negara";
import Rincian from "./pages/negara/Rincian";
import { useState } from "react";
import ThemeContext from "./components/context/ThemeContext";
import Profil from "./pages/Profil";
import { Provider } from "react-redux";
import stores from "./store/stores.js";
import Contoh from "./pages/Contoh.jsx";

function App() {
  // const [count, setCount] = useState(0);

  const tema = useState("Light");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={tema}>
        <Provider store={stores}>
          <Navbar />
          <Routes>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/product" element={<Product />} />
            <Route path="/negara" element={<Negara />} />
            <Route path="*" element={<Error />} />
            <Route path="/rincian/:id" element={<Rincian />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/contoh" element={<Contoh />} />
          </Routes>
          <Footer />
        </Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
