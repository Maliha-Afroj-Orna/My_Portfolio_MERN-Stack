import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { useEffect } from "react";
import Loading from "./components/Loading.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice.js";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/portfolio/getPortfolio-data"
      );

      const data = response.data;

      const payload = {
        intro:
          Array.isArray(data.intro) && data.intro.length > 0
            ? data.intro[0]
            : {},
        about:
          Array.isArray(data.about) && data.about.length > 0
            ? data.about[0]
            : {},
        banner:
          Array.isArray(data.banner) && data.banner.length > 0
            ? data.banner[0]
            : {},
        project:
          Array.isArray(data.project) && data.project.length > 0
            ? data.project[0]
            : {},
        resume:
          Array.isArray(data.resume) && data.resume.length > 0
            ? data.resume[0]
            : {},
      };

      dispatch(SetPortfolioData(payload));
      console.log("Normalized portfolioData: ", payload);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loading /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
