import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Hero from './components/Hero';
import Home from './components/Home';
import Splash from './components/Splash';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/:serverId/" element={<Home />} />
        <Route path="/:serverId/channels/:id" element={<Home />} />
        <Route path="/*" element="404 Not Found" />
      </Routes>
    </Router>
  );
}

export default App;
