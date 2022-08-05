import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import Cake from './Cake';
import axios from 'axios';
function Search() {
    var[query, setQuery]=useSearchParams()
    var [cakes, setCakes]=useState([])
  useEffect(()=>{
    axios({
      url: "https://apifromashu.herokuapp.com/api/searchcakes", //searchcakes
      method: "get",
    params: {q:query.get("q")}
    }).then((response)=>{
      setCakes(response.data.data)

    },(error)=>{console.log("error from signup api",error)})
  },[])
 if(cakes.length == 0){
   return <>
    <div className="spinner-container text center">
      <div className="loading-spinner">
      </div>
    </div>
   </>
 } 
 else{ return <>
  <label>{cakes.length} results found</label>
  <div className="row">    
  {cakes.map(function(each,index){
   return <Cake image={each.image} name = {each.name} price = {each.price}/>
  })}
  </div>
  
  </>}
}
export default Search
