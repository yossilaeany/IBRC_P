import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header';
import Gallery from './pages/Gallery'
import About from './pages/About';
import Q_and_A from './pages/Q_and_A';
import ContectUs from './pages/ContectUs';
function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Q_and_A' element={<Q_and_A/>}/>
          <Route path='/ContectUs' element={<ContectUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
