import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import store from '../redux strore/store'

function Navbar()

{
  

  var isloggedin = useSelector((state)=>{return state.isloggedin})
  function logout() {
    window.location.href="/"
    localStorage.clear()
    
  }
    return <>
<nav class="navbar bg-light">
  <div class="container-fluid">
  <Link to ="/" style={{ textDecoration: 'none' }}><a class="navbar-brand">CakesDemo</a></Link>

    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
        <button class="btn btn-outline-success" type="submit">Search</button>
        
  
       { !isloggedin && <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>} 
       { isloggedin &&<button onClick={logout} class="btn btn-outline-success" type="submit">Logout</button>} 

      </form>
  </div>
</nav>

    </>
}
export default Navbar