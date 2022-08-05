import { useState } from "react"
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios"


function Login(){
    var[error,setError]=useState("")
    var[flag,setFlag]=useState(false)
    var user = {}
    var navigate = useNavigate()
    
    function validate(){
      if(user.email==""|| user.email==undefined){
        setError("cannot leave email blank")             
      }
      else {
        setError(" ")
      }
    }
    function register(){
      if(flag==false){
      setFlag(flag=true)}
      validate()
      axios({
        url: "https://apifromashu.herokuapp.com/api/login", 
        method: "post",
        data:user
      }).then((response)=>{
        console.log("response from login api",response)
        if(response.data.token){
          setError("Invalid or Bad credientials")        
        }else{ navigate("/")}
      },(error)=>{console.log("error from login api",error)})
  

    }
    function getEmail(event){
      user.email = event.target.value
      console.log(user.email,flag)
       if(flag==true) {validate()}
        
    }
    function getPassword(event){
        user.password = event.target.value
    }
    return<>
     <div class="card"  style={{width: "18rem"}}>
  <div class="card-header">
    Login  
  </div>
  <div class="card-body">
    <label className='text-danger'> {error}</label>
    <input onChange={getEmail} type="text" class="form-control" placeholder="Useremail" aria-label="Username" aria-describedby="basic-addon1"/>
    <input onChange={getPassword} type="text" class="form-control" placeholder="Userpassword" aria-label="Username" aria-describedby="basic-addon1"/>  
    <br></br>  
    <Link to="/signup" style={{ textDecoration: 'none' }}>New user? click here to register</Link>
    <button onClick ={register} type="button" class="btn btn-primary">Login</button>

  </div>
</div>
    </>

}
export default Login