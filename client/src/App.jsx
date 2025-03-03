import TopBar from "./components/topbar/Topbar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single"
import Write from "./Pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/public/index.html" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/single" element={<Single />}/>
        <Route path="/write" element={<Write />}/>
      </Routes>
    </Router>
  );
}

export default App;