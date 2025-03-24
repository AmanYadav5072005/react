import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Service from "./Service"
import Cart from "./Cart"

function App(){
  return(
    <>
    
    
    

    <Routes>
      <Route path="/" element={<Navbar/>}>
        
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/> 
      <Route path="/cart" element={<Cart/>}/>
     
      <Route path="/service" element={<Service/>}/> 
      
      </Route>
    </Routes>
    
    </>
  )
}
export default App