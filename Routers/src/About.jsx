import { useNavigate } from "react-router-dom"

function About(){
    let navigator = useNavigate()
    function servicee(){
        navigator('/service')
    }
    return(
        <>
        <h1>About page</h1>
        <button onClick={servicee}>Service page</button>
        </>
    )
}
export default About