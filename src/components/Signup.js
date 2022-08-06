import axios from "axios"
import { Navigate, useNavigate } from "react-router"

function Signup(){
    var userarray=[]
    var navigate = useNavigate()
    var user = {}
    function register(){
      axios({
        url: "https://apifromashu.herokuapp.com/api/register", //https://apifromashu.herokuapp.com/api/allcakes
        method: "post",
        data:user
      }).then((response)=>{
        console.log("response from signup api",response)
        if(response.data.message=="User Registered"){
          navigate("/newuser")
        }
      },(error)=>{console.log("error from signup api",error)})
        console.log(user)
    }
    function getEmail(event){
        user.email = event.target.value
    }
    function getName(event){
        user.name = event.target.value
    }
    function getPassword(event){
        user.password = event.target.value
    }
    return<>
    <div class="card" style={{width: "18rem"}}>
  <div class="card-header">
    Signup
  </div>
  <div class="card-body">
  <input onChange={getName} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    <input onChange={getEmail} type="text" class="form-control" placeholder="Useremail" aria-label="Username" aria-describedby="basic-addon1"/>
    <input onChange={getPassword} type="text" class="form-control" placeholder="Userpassword" aria-label="Username" aria-describedby="basic-addon1"/>
    
    
    <button onClick ={register} type="button" class="btn btn-primary">Register</button>
  </div>
</div>
    </>

}
export default Signup