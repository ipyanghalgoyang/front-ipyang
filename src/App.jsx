import "./css/reset.css";
import "./css/app.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main/MainLayout";
import MainContents from "./components/main/MainContents";
import Login from "./components/auth/Login";
import JoinMain from "./components/auth/JoinMain";
import Adopt from "./components/adopt/Adopt";
import Info from "./components/board/Info";
import Promo from "./components/board/Promo";
import Report from "./components/board/Report";
import BoardDetail from "./components/board/BoardDetail";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <MainLayout />

      <Routes>
        <Route path="/" element={<MainContents />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<JoinMain />}></Route>
        <Route path="/adopt" element={<Adopt />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/promo" element={<Promo />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/board/detail/:id" element={<BoardDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
