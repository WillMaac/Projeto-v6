import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*Components*/
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { NavBar } from "./components/NavBar/NavBar";
import { Post } from "./components/Post/Post";
import { Redirect } from "./components/Redirect/Redirect";
import { NotFound } from "./components/NotFound/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
