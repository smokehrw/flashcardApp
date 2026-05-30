import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Deck from './pages/Deck'
import Cards from './pages/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/decks/:id" element={<Deck />}/>
          <Route path="/decks/:id/study" element={<Cards />}/>
        </Routes>
      </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
