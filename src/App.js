import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" />
        <Route path="/projects" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;