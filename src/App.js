
import './App.css';
import About from './component/About';
import Navbar from './component/navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Contact';


function App() {
  return (
  
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              
               
              </Routes>
              </BrowserRouter>
  );
}







export default App;
