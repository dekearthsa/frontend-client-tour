import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './view/HomePage';
import ShopPage from './view/ShopPage';
import NavBar from './component/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          {/* <Route></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
