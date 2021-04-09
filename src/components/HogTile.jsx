import { useState } from "react";
import HogDetail from "./HogDetail.jsx";

function HogTile({hog: {name, image, greased, weight, specialty}}) {
  const [detailToggle, setDetailToggle] = useState(false)


  const handleToggle = () => {
    setDetailToggle(prevState => !prevState)
  }

  return (
    <div className="ui four wide column pigTile" onClick={handleToggle}>
      <h3>{name}</h3>
      <img className="tile-img" src={image} alt={name}/>
      {/* {detailToggle ? <HogDetail /> : null} */}
      {detailToggle && <HogDetail greased={greased} weight={weight} specialty={specialty} />}
    </div>
  )
}

export default HogTile
