import axios from 'axios'
import React,{useEffect} from 'react'

const Fetchapi = () => {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>console.log(res.data)
    )
    },[])
  return (
    <>
    <h1>Get data from api</h1>
    </>
  )
}

export default Fetchapi

