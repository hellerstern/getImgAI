import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./componenets/Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Suspense fallback="loading">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
export default App;
