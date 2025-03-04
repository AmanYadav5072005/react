
import Child2 from "./Child2"
function Child1(props){
    let{lname}=props

    return(
        <>
       
       <h1>From child 1</h1>
       <Child2  collage="TIT"/>
       <Child2 lname={props.name}/>
        </>
    )
}
export default Child1


