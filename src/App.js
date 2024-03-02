import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './view/HomePage';
import ShopPage from './view/ShopPage';
// import NavBar from './component/Navbar/NavBar';
import ContractPage from './view/ContactPage';
// import ComponentBottonBar from './component/ComponentHome/ComponentBottonBar';
import ProductDetail from './view/ProductDetail';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/contract" element={<ContractPage/>}/>
          <Route path="/product/:name" element={<ProductDetail/>}/>
        </Routes>
        {/* <ComponentBottonBar/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
