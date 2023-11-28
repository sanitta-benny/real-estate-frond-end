
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Buy from './page/Buy';
import Landing1 from './page/Landing1';
import Rent from './page/Rent';
import Sell from './page/Sell';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './page/Cart';
import Successful from './page/Successful';
import Interested from './page/Interested';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path={"/"} element={<Landing1/> }/>
       <Route path={'/buy'} element={ <Buy/>}/>
       <Route path={'/rent'} element={ <Rent/>}/>
       <Route path={'/sell'} element={<Sell sell/>}/>
       <Route path={'/cart'} element={<Cart/>}/>
       <Route path={'/successful'} element={<Successful/>}/>
       <Route path={'/interested'} element={<Interested/>}/>
      </Routes>
      <Footer/>
     </div>
  );
}

export default App;
