import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/article-list" element={<ArticleListPage exact />} />
          <Route path="/article/:cat" element={<ArticlePage exact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
