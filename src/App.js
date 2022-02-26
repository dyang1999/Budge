import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import LandingPage from "./Pages/LandingPage";
import CalendarPage from "./Pages/CalendarPage";
import SettingsPage from "./Pages/SettingsPage";

function App() {
  return (
    <Router>

    <Routes>
      <Route exact path="/landing" element={<LandingPage/>} />
      <Route exact path="/calendar" element={<CalendarPage/>} />
      <Route exact path="/settings" element={<SettingsPage/>} />
      <Route path="/*" element={<Navigate to='/landing'/>}/>        
      
    </Routes>
  </Router>
  );
}

export default App;
