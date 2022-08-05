import { useState, useEffect } from 'react';
import Cake from './Cake';
import axios from 'axios';
function CakeList(){
  var [cakes, setCakes]=useState([])
  useEffect(()=>{
    axios({
      url: "https://apifromashu.herokuapp.com/api/allcakes", //searchcakes
      method: "get",//params:object.q:uservalue
    }).then((response)=>{
      setCakes(response.data.data)
    },(error)=>{console.log("error from signup api",error)})
  },[])
 if(cakes.length == 0){
   return <>
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
   </>
 }
 else{ return <>
  <div className="row">
  {cakes.map(function(each,index){
   return <Cake cakeid={each.cakeid} image={each.image} name = {each.name} price = {each.price}/>
  })}
  </div>
  
  </>}
   
    
}

export default CakeList