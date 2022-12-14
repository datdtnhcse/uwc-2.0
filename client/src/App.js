import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from "./pages/Login"
import Overview from './pages/Overview';
import Assign from './pages/Assign';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/assign" element={<Assign/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
