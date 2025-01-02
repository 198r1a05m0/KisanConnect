import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './modules/component/Hero';
import PostAJob from './modules/Owner/pages/PostAJob';
import FindAWork from './modules/Worker/pages/FindAJob';

function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route 
        path="/PostAJob" element= {<PostAJob />} />
        <Route 
        path="/FindAJob" element={<FindAWork />} />
      </Routes>
      </Router> 
     
    </div>
  );
}

export default App;
