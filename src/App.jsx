import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Loader} from './Components/Loader';
import {Navbar} from './Components/Navbar';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Projects} from './Pages/Projects';
import {Contact} from './Pages/Contact';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-[#121212] text-white min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}