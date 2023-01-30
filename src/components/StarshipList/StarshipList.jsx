import { useEffect, useState } from "react";
import { getStarshipList } from "../../services/api-calls";
import './StarshipList.css'

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
            {starship.name}
          </div>
          )}
          </div>
        </>
    );
}

export default StarshipList
