import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const loading = useSelector((state) => state.product.isLoading);
  if (loading)
    <div>
      <h1>Loading....</h1>
    </div>;
  return (
    <>
      <Header />
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
