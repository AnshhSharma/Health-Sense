import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Medicines from './Components/Medicines';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import ChatBot from './Components/ChatBot';
import LabTest from './Components/LabTest';
function App() {


  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/medicines" element={<Medicines/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/chatbot" element={<ChatBot/>} />
            <Route exact path="/labtest" element={<LabTest/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
