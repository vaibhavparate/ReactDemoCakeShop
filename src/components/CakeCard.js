function Cakecard(prop){
    return<>
    
<div class="card" style={{width: "18rem"}}>
  <img src={prop.image} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{prop.name}</h5>
    <p class="card-text">Price: {prop.price}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    </>
}
export default Cakecard