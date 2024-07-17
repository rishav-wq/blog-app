// App.jsx
import Topbar from "./components/topbar/Topbar.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Single from './pages/single/Single.jsx';
import Settings from "./pages/settings/Settings.jsx";
import Write from "./pages/write/Write.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
       
      </Routes>
    </Router>
  );
}

export default App;
