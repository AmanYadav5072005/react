import Myimg from './photo.jpg'
import './App.css'
import {About,Help} from './About'
import Contact from './Contact'
import Services from './Services'
import Gallary from './Gallary'



function App() {
  let Name="Aman Yadav"
  let Age=20
 
  let st ={
    color:"yellow",
    backgroundColor:"black",
    padding:"20px"
  }
   
  
  return (
    <>
    
    <h1>Welcome to React Classes</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos sunt, consequuntur et reiciendis dignissimos optio similique. Ratione voluptatum temporibus nemo, cum exercitationem dolorem ullam dicta quia velit sed tenetur sequi?</p>
    <img src={Myimg} alt=""height="200px" />

    <h1 style={{backgroundColor:"red",color:"white"}}>My Name is {Name}</h1>
    <h1 style={st}>My age{Age}</h1>
    <h1 className='ex'> externalclass</h1>
    <About/>
    <Contact/>
    <Services/>
    <Gallary/>
    </>
  )
   
   
}

export default App
