
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
