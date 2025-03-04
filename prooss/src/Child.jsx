import Child1 from "./Child1"




function Child(props){
    let{lname}=props
    return(
        <>
       
       <h1>My name is {props.name}</h1>
       <Child1  district="vaishali"/>
        </>
    )
}
export default Child