import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carosuel';
import Cakecard from './components/CakeCard';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
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

      

    </div>
  );
}

export default App;
