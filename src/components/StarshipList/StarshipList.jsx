import { useEffect, useState } from "react";
import { getStarshipList } from "../../services/api-calls";
import { Link } from "react-router-dom";
import './StarshipList.css'
import StarshipPage from "../StarshipPage/StarshipPage";

const StarshipList = () => {
const [startshipList, setStarshipList] = useState([])

useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
    return(
        <>
      
        <div id= "list">
        {startshipList.map(starship =>
          <div className="ship-card" key={starship.model}>
            
            <Link id="page" to="/starship" state={{starship}}>{starship.name}</Link>
            
          </div>
          )}
          </div>
        </>
    );
}

export default StarshipList
