export function Reducer(state={ 
    isloggedin: localStorage.getItem("token")?true:false,
    kart: localStorage.getItem("kart")?true:false
}, action){
    
    switch(action.type){
        case "LOGIN":{
           state= {...state}
           state.isloggedin = true
           console.log(state.isloggedin)
           return state
        }

        default: return state
    }

}
