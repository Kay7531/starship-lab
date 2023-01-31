import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetails, getStarshipList } from "../../services/api-calls";
import { useLocation } from "react-router-dom";
import StarshipList from "../StarshipList/StarshipList";
import './StarshipPage.css'


const StarshipPage = (props) => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const location = useLocation()

    useEffect(() => {
        const fetchDetails = async () => {
            const starshipData = await getDetails(location.state.starship.url)
            setStarshipDetails(starshipData)

        }
        fetchDetails()

    }, [location.state.starship.url])


    return (
        <>
        <main>
        <div className="deet">
        <p>NAME: {starshipDetails.name} </p>
        <p>MODEL: {starshipDetails.model}</p>
        <Link id='return' to= "/starship-list" >RETURN</Link>
       
        </div>
        </main>

          
        </>

    );
}

export default StarshipPage;

