import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carosuel';
import Cakecard from './components/CakeCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Cakelist from './components/CakeList';
import Login from './components/login';
import Signup from './components/Signup';

function App() {
  return (<>
  <Navbar/>
  <div className='row'>
  <Login/>
  <Signup/>
  </div>
  <Cakelist/>

  </>
   
  );
}

export default App;
//=============old code===========
{/* <div className="App">
<Navbar/>
<Carousel/>
<div class="container text-center">
  <div class="row justify-content-md-center">

<div class="col-md-auto">
<Cakecard image='img2(3).jpg' name = 'Chocolate cake' price = '750'/>
</div>
<div class="col-md-auto">
<Cakecard image='img2(1).jpg' name = 'Short cake' price = '750'/>
</div>
<div class="col-md-auto">
<Cakecard image='img2(3).jpg' name = 'Chocolate cake' price = '750'/>
</div>
<div class="col-md-auto">
<Cakecard image='img2(1).jpg' name = 'Short cake' price = '750'/>
</div>


</div>
</div>



</div> */}