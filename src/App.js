
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import SkillPage from './components/SkillPage';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skill" element={<SkillPage/>}/>
      </Routes>

      <Footer />

    </div>
    </Router>
  );
}

export default App;
