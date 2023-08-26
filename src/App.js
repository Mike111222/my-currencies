import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import CoinsList from './components/CoinsList';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CoinsList />} />
          <Route exact path="detail" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
