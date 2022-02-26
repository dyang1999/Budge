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
import ProfilePage from "./Pages/ProfilePage"

function App() {
  return (
    <Router>

    <Routes>
      <Route exact path="/profile" element={<ProfilePage/>} />
      <Route exact path="/calendar" element={<CalendarPage/>} />
      <Route exact path="/settings" element={<SettingsPage/>} />
      <Route exact path="/landing" element={<LandingPage/>} />
      <Route path="/*" element={<Navigate to='/landing'/>}/>        
      
    </Routes>
  </Router>
  );
}

export default App;
