
import{useState} from "react"
import About from "./About"

function App(){
  let[name,setName]=useState("yadav")
  let[age,setAge]=useState(20)
  let[city,setCity]=useState("city")
   let[village,setVillage]=useState("village")
   let[color,setColor]=useState("lightblue")
  function fun(){
    setName("Manish")
  }
 
  


  return(
    <>
    <div style={{height:"100vh",backgroundColor:color}}>
    <h1>My name is Aman {name}</h1>
    <h1>My age</h1>
    <h1>My city</h1>
    <h1>My village</h1>


    <button onClick={fun}>Change name</button>
    
    <button onClick={()=>setAge(20)}>Change age</button>

   <button onClick={city}>Change city</button>

    <button onClick={village} >Change village </button> 

    <button on onClick={()=>setColor('orange')}> orange</button>

    <button on onClick={()=>setColor('red')}> red</button>
    
    <button on onClick={()=>setColor('blue')}> blue</button> 

    <About/>

    </div>
    </>
  )
}
export default App