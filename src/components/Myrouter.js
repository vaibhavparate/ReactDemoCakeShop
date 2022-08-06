
import { useDispatch } from 'react-redux'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Cakedetails from './Cakedetails'
import CakeList from './CakeList'
import Carousel from './Carousel'
import Login from './login'
import Navbar from './Navbar'
import Pagenotfound from './Pagenotfound'
import Search from './Search'
import Signup from './Signup'
import Cart from './Cart'
import Checkout from './checkout'
import Address from './Address'
import Payment from './payment'
import  Toast  from './toastify'
import Newuser from './Newuser'

function Myrouter() {
    
    return<>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/newuser" element={ <Newuser/>} ></Route>
        <Route path = "/toast" element={ <Toast/>} ></Route>
        <Route path = "/login" element={ <Login/>} ></Route>
        <Route path = "/kart" element={ <Cart/>} ></Route>
        <Route path = "/" element={<><Carousel/><CakeList/></>} ></Route>
        <Route path = "/signup" element={<Signup/>} ></Route>
        <Route path = "/cakelist" element={<CakeList/>} ></Route>
        <Route path = "/*" element = {<Pagenotfound/>}></Route>
        <Route path ="/search" element={<Search/>}></Route>
        <Route path ="/details/:cakeid" element={<Cakedetails/>}></Route>
        <Route path ="/checkout" element={<Checkout/>}>
            <Route path ="address" element={<Address/>}></Route>
            <Route path ="payment" element={<Payment/>}></Route>
            
        </Route>

        


    </Routes>
    </BrowserRouter>
    </>
    
}
export default Myrouter