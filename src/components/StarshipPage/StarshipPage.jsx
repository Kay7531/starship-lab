import { useState, useEffect } from "react";
import { getStarshipList } from "../../services/api-calls";
import { useLocation } from "react-router-dom";
import StarshipList from "../StarshipList/StarshipList";


const StarshipPage = () => {
    const[starshipPage, setStarshipPage] = useState({})
    const location = useLocation()
    useEffect(() => {
        const fetchPage = async () => {
            const starshipData = await getStarshipList(location.state.starship.url)
            setStarshipPage(starshipData)
        }
        fetchPage()
    }, [location.state.starship.url])

 return (
    <>
    <h3>MODEL: {starshipPage.model}</h3>
    </>

 );
}

export default StarshipPage;

  