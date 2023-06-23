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
function App() {


  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/medicines" element={<Medicines/>} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
