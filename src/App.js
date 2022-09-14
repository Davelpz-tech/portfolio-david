import React from "react";

import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/";
import { HomePage, AboutPage, ProjectsPage, ContactPage } from "./pages/";
import { ThemeContext } from "./utils/themeContext";

const App = () => {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className="App" id={toggle ? "light" : "dark"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
