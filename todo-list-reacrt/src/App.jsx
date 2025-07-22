import "./App.css";
import Home from "../src/Components/Home";
import Pastes from "../src/Components/Pastes";
import Navbar from "../src/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewPast from "./Components/ViewPast";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastes" element={<Pastes />} />
        <Route path="/pastes/:id" element={<ViewPast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
