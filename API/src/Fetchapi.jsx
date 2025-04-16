import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fetchapi = () => {

    let[apidata,setapidata] = useState([])
    let[frm,setfrm]= useState(false)
    let[Editdata,setEditdata]=useState({

    })

    function mydelete(id){
      axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(r=>alert("Data Deleted"))
    }
    function echange(e){
      const{name,value}=e.target
      setEditdata({...editdata,[name]:value})
    }
    function esubmit(){
      axios.put(`http://localhost:3000/userdata/${Editdata.id}`,Editdata)
      .then(r=>alert("Edit Sucess"))
    }

useEffect(()=> {
    axios.get('http://localhost:3000/userdata') 
    .then(res=>setapidata(res.data))
},
 [mydelete])

  return (
    <>
  <h1>api data fetch here</h1>
  <h2>ALL USER DATA</h2>
  <table border="2px solid black" align='center'>
    <tr>
        <td>ID</td>
        <td>U_NAME</td>
        <td>AGE</td>
        <td>CONTACT</td>
        <td>CITY</td>
        <td>Delete</td>
        <td>Edit</td>

        
    </tr>
    {
      apidata.map((e)=>{ return <tr>
        <td>{e.id}</td>
        <td>{e.uname}</td>
        <td>{e.age}</td>
        <td>{e.contact}</td>
        <td>{e.city}</td>
        <td><button onClick={()=>mydelete(e.id)}>Delete</button></td>
        <td><button onClick={()=>{setfrm(true),seteditdata(e)}}>Edit</button></td>
      
      </tr>})
    }
  </table>

  {
    frm && (
      <>
      <h1>Edit Form</h1>
    <form onSubmit={finalsubmit} >
        
        <label>ID:</label>
        <input type='text' name="id" />

        <label>USER_NAME: </label>
        <input type='text' name="uname" /><br /> <br />
        <label>AGE: </label>
        <input type='text' name="age"  /><br /> <br />
        <label>CONTACT: </label>
        <input type='text' name="contact" /><br /> <br />
        <label>CITY: </label>
        <input type='text' name="city"  /><br /> <br />
        <input type='submit' />
    </form>
      </>
    )
  }
      </>
  )

  }
  
    
      

        


    
  
  



  


export default Fetchapi