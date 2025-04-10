import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Sign = () => {
    let [frmdata,setFrmdata]=useState({
       name:"",email:"",password:"" 
    })
    let navigator=useNavigate()
    function Inputhandle(e){
        const {name,value}=e.target
        setFrmdata({...frmdata,[name]:value})
    }
    function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('signdata',JSON.stringify(frmdata))
        navigator('/login')
    }
  return (
    <>
    <form action="" onSubmit={finalsubmit}>
        <label html="">Name</label>
        <input type="text" name="name" onChange={Inputhandle}/> <br/>

        <label html="">Email</label>
        <input type="text" name="email" onChange={Inputhandle}/> <br/>

        <label html="">Password</label>
        <input type="text" name="password" onChange={Inputhandle}/> <br/>

        <input type="submit"/>
    </form>
    </>
  )
}

export default Sign
