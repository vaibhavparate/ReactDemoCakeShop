import { Link} from 'react-router-dom'
function Navbar(){
    return <>
<nav class="navbar bg-light">
  <div class="container-fluid">
  <Link to ="/" style={{ textDecoration: 'none' }}><a class="navbar-brand">CakesDemo</a></Link>
    <form class="d-flex" role="search">
      <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link>
    </form>
  </div>
</nav>
    </>
}
export default Navbar