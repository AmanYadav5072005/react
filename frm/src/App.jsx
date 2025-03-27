import React from 'react'
import { useState } from 'react';
import Form from './Form';

const App = () => {
  let [frmdata,setFrmdata]=useState({
    username:"",age:"",contact:""
  })
 
  function Inputvalue(e){
    const {name,value} =e.target
    setFrmdata({...frmdata,[name]:value})
  }
  function finalsubmit(e){
   e.preventDefault()
   console.log(frmdata);
   localStorage.setItem("userdata",JSON.stringify(frmdata))
   
  }
  return (
    <>
    <h1>hello </h1>
    <form onSubmit={finalsubmit}>
      <label htmlFor="">Name</label>
      <input type="text" name='username' onChange={Inputvalue}/><br/><br/>

      <label htmlFor="">Age</label>
      <input type="number" name='age' onChange={Inputvalue}/><br/><br/>

      <label htmlFor="">Contact</label>
      <input type="number" name='contact' onChange={Inputvalue}/><br/><br/>

     <input type="submit" value="submit"/>
    </form>
    </>
  )
}

export default App
