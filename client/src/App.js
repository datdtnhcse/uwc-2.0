import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from "./pages/Login"
import Overview from './pages/Overview';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/overview" element={<Overview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
