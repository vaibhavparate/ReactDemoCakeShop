import axios from "axios"
function Signup(){
   
    var user={}
    function register(){
       axios({
        url:"https://apifromashu.herokuapp.com/api/register",
        method:"post",
        data:user
       }).then((response)=>{
        console.log("response fron signup api",response)
       },(error)=>{console.log("error from signup api",error)})
       console.log(user)
    }
    function getName(event){
        user.name = event.target.value
    }
    function getEmail(event){
        user.email = event.target.value
        
    }
    function getPassword(event){
        user.password = event.target.value
    }
    return<>
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">SignUp</h5>
    <div class="form-floating mb-3">       
  <input onChange={getName} type="name" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating mb-3">
<input onChange={getEmail} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input onChange={getPassword} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<button onClick={register} type="button" class="btn btn-primary">SignUp</button>

  </div>
</div>
    </>
}
export default Signup