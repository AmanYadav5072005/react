import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Service from "./Service"
import Cart from "./Cart"

function App(){
  return(
    <>
    
    
    
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        
      <Route index element={<Home/>}/>
      <Route path="/About" element={<About/>}/> 
     
     
      <Route path="/Service" element={<Service/>}/> 
      <Route path="/Cart" element={<Cart/>}/> 
      </Route>
    </Routes>
    
    </>
  )
}
export default App