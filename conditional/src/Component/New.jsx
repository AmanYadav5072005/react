import {useSet} from "react"
import { useState } from "react"
function Neww(){
    let [st,setSt] = useState(true)
    let[count,setCount]=useState(0)
    function decrement(){
        if(count!=0){
            setCount(count-1)
        }
    }
    return(
        <>
       <h1>Hide Show</h1>
       {st ? <h1> Welcome </h1> : ""  } 
     
       <button onClick={()=>setSt(false)}>Hide</button>
       <button onClick={()=>setSt(true)}>Show</button>
       <button onClick={()=>setSt(!st)}>
        {st? "hide" :"show"}
       </button> <br></br>

       <h1>{count}</h1>
       <button onClick={decrement}>-</button>
       <button onClick={()=>setCount(count+1)}>+</button>
       <button onClick={()=>setCount(count-1)}>----</button>
   
        </>
    )
}
export default Neww