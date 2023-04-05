import './App.css';
import { Cart } from './components/cart';
import Head1 from './components/HeaderH';
import Nav from './components/Nav';


function App() {
  return(
    <div className='main'> 
      <Head1/>
      <Nav/>
      <Section1/>
      <Cart/>
    </div>
  )
}

export default App;

