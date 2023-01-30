import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
       <header>
        <Link to= "/starship-list" id='navhead'>STAR WARS STARSHIPS</Link>
       </header>
    )
}

export default NavBar

