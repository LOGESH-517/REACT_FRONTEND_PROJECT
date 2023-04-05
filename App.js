import './App.css';
import { Cart } from './components/cart';
import Coffee from './components/Coffee';
import Icecream from './components/Icecream';
import Head1 from './components/HeaderH';
import Milkshake from './components/Milkshake';
import Nav from './components/Nav';
import Navigation from './components/Navigation';
import Pasteries from './components/Pasteries';
import Salad from './components/Salad';
import Tea from './components/Tea';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
      <Router>
    <div className='main'> 
    { /* <Nav/>
      <Section1/>
    <Coffee/> */}
       <Head1/>
       <div style={{textAlign:"center"}}>
      <Navigation/>
      <Routes>
        <Route exact path='/coffee' element={<Coffee/>}></Route>
        <Route exact path='/tea' element={<Tea/>}></Route>
        <Route exact path='/milkshake' element={<Milkshake/>}></Route>
        <Route exact path='/pasteries' element={<Pasteries/>}></Route>
        <Route exact path='/salad' element={<Salad/>}></Route>
        <Route exact path='/icecream' element={<Icecream/>}></Route>
      </Routes>
      </div>
    <Cart/>
    </div>
    </Router>
  );
}

export default App;
