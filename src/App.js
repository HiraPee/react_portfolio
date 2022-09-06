
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import SkillPage from './components/SkillPage';
import AboutPage from './components/AboutPage';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router basename={"https://dev-yakuza-org.github.io/portfolio"}>
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skill" element={<SkillPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>

      <Footer />

    </div>
    </Router>
  );
}

export default App;
