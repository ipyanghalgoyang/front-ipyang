import "./css/reset.css";
import "./css/app.css";
import MainLayout from "./components/main/MainLayout";
import MainContents from "./components/main/MainContents";

function App() {
  return (
    <div className="App">
      <MainLayout />
      <MainContents />
    </div>
  );
}

export default App;
