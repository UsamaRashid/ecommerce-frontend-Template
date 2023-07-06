import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
