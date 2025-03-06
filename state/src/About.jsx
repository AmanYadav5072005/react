import {useState } from "react"


function About(){
    let[ar,setAr]=useState({
        name:"Aman",contact:12345
    })
    let[data,setData] = useState(["bhopal",13,"Sachin"])
   let [color,setColor ] = useSet("")
    function fun(){
        setAr({name:"AKASH",contact:7889})
    }
    
        
    
    return(
        <>
            <h1>ABout{ar.name}{ar.contact}</h1>
            <button onClick={fun}>Change object</button>
            <h1> My data {data[0]} and his nickname is{data[1]}</h1>

        <div style={{height:"300px" , backgroundColor : color}}>
            <button onClick={()=>setColor('black')}>Dark Mode</button>
            <button onClick={()=>setColor('white')}>Light Mode</button>
        </div>
        </>
    )
}
export default About