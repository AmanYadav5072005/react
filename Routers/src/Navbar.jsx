
import { Link, Outlet } from "react-router-dom"

function Navbar(){
    return(
        <>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/about">About</Link></li>
                <li> <Link to="/service">Service</Link></li>
                <li> <Link to="/cart">Cart</Link></li>
               
               
            </ul>
        </nav>
        <Outlet />
        </>
    )
}
export default Navbar