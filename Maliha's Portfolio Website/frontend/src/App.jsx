import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { useState } from "react";
import Loading from "./components/Loading.jsx";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
      {showLoading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
