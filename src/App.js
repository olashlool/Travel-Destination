import Home from './components/home/Home';
import './App.css';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' element={<TourDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;