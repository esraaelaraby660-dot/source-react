import { Routes, Route } from "react-router-dom"
import Product from "../pages/Product";
import About from "../pages/About";
import Home from "../pages/Home";
export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </>
  );
}
