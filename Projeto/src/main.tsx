import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Components*/
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar/NavBar";
import { Post } from "./components/Post/Post";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
