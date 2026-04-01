import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Decks from './pages/Decks'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/decks/:id" element={<Decks />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
