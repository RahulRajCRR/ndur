import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Lab from "./pages/Lab";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Partnership from "./pages/Partnership";
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/lab" element={<Layout><Lab /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/partnership" element={<Layout><Partnership /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
