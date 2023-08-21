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
import Product from "./components/product/Product";
import ProductDetail from "./components/product/ProductDetail";
import CustomerCenter from "./components/inquire/CustomerCenter";
import RedirectCustomerCenter from "./components/inquire/RedirectCustomerCenter";
import Inquire from "./components/inquire/Inquire";
import NoticeDetail from "./components/inquire/NoticeDetail";
import InquireDetail from "./components/inquire/InquireDetail";
import NoticeWrite from "./components/inquire/NoticeWrite";
import InquireWrite from "./components/inquire/InquireWrite";


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
        <Route path="/board/:category/write" element={<BoardWrite />}></Route>
        <Route path="/product/detail/:id" element={<ProductDetail />}></Route>
        <Route path="/customer/:category" element={<CustomerCenter />}></Route>
        <Route path="/customer/inquire" element={<Inquire />}></Route>
        <Route path="/customer" element={<RedirectCustomerCenter />} />
        <Route path="/notice/detail/:id" element={<NoticeDetail />}></Route>
        <Route path="/inquire/detail/:id" element={<InquireDetail />}></Route>
        <Route path="/notice/:category/write" element={<NoticeWrite />}></Route>
        <Route path="/inquire/write" element={<InquireWrite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
