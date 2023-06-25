import "./css/reset.css";
import "./css/app.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main/MainLayout";
import MainContents from "./components/main/MainContents";
import Login from "./components/auth/Login";
import JoinMain from "./components/auth/JoinMain";

function App() {
  return (
    <div className="App">
      <MainLayout />

      <Routes>
        <Route path="/" element={<MainContents />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<JoinMain />}></Route>
      </Routes>
    </div>
  );
}

export default App;
