import {Link} from 'react-router-dom'
function Cake(props){
    return<>
    <div class="card" style={{width: "18rem"}}>
  <Link to={"/details/"+props.cakeid}><img src={props.image} class="card-img-top" alt="..."></img></Link>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.price}</p>
    <button id="demo" class="btn btn-primary" >BuyNow</button>
  
  </div>
</div>
    </>
}


export default Cake