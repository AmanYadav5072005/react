const Event =()=>{
    function fun(){
        alert("working")
    }
    return(
        <>
       
       <button onClick={fun}>Click</button>
       <button onDoubleClick={fun}>DbClick</button>
       <button onMouseEnter={fun}> MouseEnter</button>
       
        </>
    )
}
export default Event