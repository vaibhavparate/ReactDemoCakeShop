import { useState } from "react"

function Login(){
    var[error,setError]= useState("")
    var[flag,setFlag]=useState(false)
    var user ={}

    function validate(){
        if(user.email==""|| user.email==undefined){
            setError("Cannot leave email blank")
        }
        else {
            setError(" ")
        }
    }
    function register(){
        if(flag==false){
            setFlag(true)
        }
        validate()
    }
    function getEmail(event){
        user.email = event.target.value
        if(flag==true){
            validate()
        }
    }
    function getPassword(event){
        user.password = event.target.value
    }
    return<>
    <div class="card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">Login</h5>
    <label className="text-danger">{error}</label>
    <div class="form-floating mb-3">
        
  <input onChange={getEmail} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input onChange={getPassword} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<button onClick={register} type="button" class="btn btn-primary">Login</button>

  </div>
</div>
    </>
}
export default Login