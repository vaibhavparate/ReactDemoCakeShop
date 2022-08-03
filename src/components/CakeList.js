import { useState } from 'react'; 
import axios from 'axios';
import Cakecard from './CakeCard';

function Cakelist(){
     var [cakes, setCakes]=useState([])
    function getCake(){ 
        axios({
        url: "https://apifromashu.herokuapp.com/api/allcakes",
        method: "get",
    }).then((response)=>{
    setCakes (response.data.data) },
(error)=>{console.log("error from signup api",error)})
    }
return <>
<button onClick={getCake}>Get cake</button>
 <div className="row">

{cakes.map(function(each, index) { 
    return <Cakecard image = {each.image} name = {each.name} price ={each.price}/>
})}
</div>

    </>
}

export default Cakelist