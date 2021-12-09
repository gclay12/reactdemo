import { Routes, Route } from 'react-router-dom';
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page4 from './components/pages/Page4'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>

    </div>
  );
}

export default App;

