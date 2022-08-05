import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import 'bootstrap/dist/js/bootstrap.bundle'
import CakeList from './components/CakeList';
import Signup from './components/Signup'
import Login from './components/login';
function App() {
 
  return (<>
   <div className='container-fluid'>
    <Navbar/>
    <Carousel/>
  </div>
    
    </>
  );
}

export default App;
/*<div className="App">
<Signup/>
<Navbar/>
<div class="container text-center">
<div class="row">
<Carousel/>
</div>
</div>
<CakeList/>  
</div>*/
//Day 2
{/* <div className='container-fluid'>
    <Navbar/>
    <CakeList/>
  <Signup/>
    <Login/>
  </div> */}