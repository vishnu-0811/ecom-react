import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Layouts from "./components/Layout/Layouts";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Wishlist from "./components/Module/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/wishlist" element={<Wishlist />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
