import Navbar from '../src/components/Navbar'
import HeroSection from './components/HeroSection';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact component= {HeroSection}/>
        </Routes>
      </Router>
      <HeroSection ></HeroSection>
    </div>
  );
}

export default App;
