import React, { useState } from 'react'

const Form = () => {
     let [name,setName]=useState()
     function Inputname(n){
        setName(n.target.value);
     }
     let [age,setAge]=useState()
     function Inputage(a){
        setAge(a.target.value);
     }
     let [email,setEmail]=useState()
     function Inputemail(e){
        setEmail(e.target.value);
     }
     let [contact,setContact]=useState()
     function Inputcontact(c){
        setContact(c.target.value);
     }
     let [address,setAddress]=useState()
      function Inputaddress(ad){
        
        setAddress(ad.target.value)
      }
  return (
    <>
    <h1>my name :{name}</h1>
    <h1>my age :{age}</h1>
    <h1>my email :{email}</h1>
    <h1>my contact :{contact}</h1>
    <h1>my address :{address}</h1>
      <form action="">
      <label htmlFor="">Name</label>
      <input type="text" onChange={Inputname}/><br></br>

      <label htmlFor="">Age</label>
      <input type="text" onChange={Inputage}/><br></br>
      
      <label htmlFor="">email</label>
      <input type="text" onChange={Inputemail}/><br></br>
      
      <label htmlFor="">contact</label>
      <input type="text" onChange={Inputcontact}/><br></br>
      
      <label htmlFor="">address</label>
      <input type="text" onChange={Inputaddress}/><br></br>
      
    </form>
    </>
  )
}

export default Form
