import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GuestProfilePage from "./pages/GuestProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guest/:id" element={<GuestProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
