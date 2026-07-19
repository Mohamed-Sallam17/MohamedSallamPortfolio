import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
