
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Cakedetails from './Cakedetails'
import CakeList from './CakeList'
import Carousel from './Carousel'
import Login from './login'
import Navbar from './Navbar'
import Pagenotfound from './Pagenotfound'
import Search from './Search'
import Signup from './Signup'

function Myrouter() {
    return<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/login" element={ <Login/>} ></Route>
        <Route path = "/" element={<><Carousel/><CakeList/></>} ></Route>
        <Route path = "/signup" element={<Signup/>} ></Route>
        <Route path = "/cakelist" element={<CakeList/>} ></Route>
        <Route path = "/*" element = {<Pagenotfound/>}></Route>
        <Route path ="/search" element={<Search/>}></Route>
        <Route path ="/details/:cakeid" element={<Cakedetails/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
    
}
export default Myrouter