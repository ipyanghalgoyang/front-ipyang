import "./css/reset.css";
import "./css/app.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main/MainLayout";
import MainContents from "./components/main/MainContents";
import Login from "./components/auth/Login";
import Join from "./components/auth/Join";

function App() {
  return (
    <div className="App">
      <MainLayout />

      <Routes>
        <Route path="/" element={<MainContents />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </div>
  );
}

export default App;
