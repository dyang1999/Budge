import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import LandingPage from "./Pages/LandingPage";
import SearchPage from "./Pages/SearchPage";
import CartPage from "./Pages/CartPage";
import ItemPage from "./Pages/ItemPage";

function App() {
  return (
    <Router>

    <Routes>
      <Route exact path="/landing" element={<LandingPage/>} />
      <Route exact path="/results/:keyword" element={<SearchPage/>} />
      <Route exact path="/:item" element={<ItemPage/>} />
      <Route exact path="/cart" element={<CartPage/>} />
      <Route path="/*" element={<Navigate to='/landing'/>}/>        
      
    </Routes>
  </Router>
  );
}

export default App;
