import "./css/reset.css";
import "./css/app.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main/MainLayout";
import MainContents from "./components/main/MainContents";
import Login from "./components/auth/Login";
import JoinMain from "./components/auth/JoinMain";
import Adopt from "./components/adopt/Adopt";
import BoardIndex from "./components/board/BoardIndex";
import BoardDetail from "./components/board/BoardDetail";
import BoardWrite from "./components/board/BoardWrite";
import ProductWrite from "./components/product/ProductWrite";
import Product from "./components/product/Product";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <div className="App">
      <MainLayout />

      <Routes>
        <Route path="/" element={<MainContents />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<JoinMain />}></Route>
        <Route path="/adopt" element={<Adopt />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/board/:category" element={<BoardIndex />}></Route>
        <Route path="/board/detail/:id" element={<BoardDetail />}></Route>
        <Route path="/board/write" element={<BoardWrite />}></Route>
        <Route path="/product/write" element={<ProductWrite />}></Route>
        <Route path="/product/detail/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
