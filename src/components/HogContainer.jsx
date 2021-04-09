import { useState } from "react";
import HogTile from "./HogTile.jsx";
import FilterForm from "./FilterForm.jsx";

import hogsData from "../porkers_data";


function HogContainer() {
  const [hogs, setHogs] = useState(hogsData)
  const [dropDown, setDropDown] = useState("All")
  const [checkBox, setCheckBox] = useState(false)

  const handleDropDown = (e) => {
    const term = e.target.value
    setDropDown(term)
  }

  const handleCheckBox = () => {
    setCheckBox(prev => !prev)
  }

  const filterHogs = () => {
    if (checkBox){
      return [...hogs].filter(hog => hog.greased )
    }else {
      return [...hogs]
    }
  }
 
  const sortHogs = () => {
    const hogsArray = filterHogs()

    if (dropDown === "Weight"){
      return hogsArray.sort((a,b) => b.weight - a.weight )
    } else if (dropDown === "Name") {
      return hogsArray.sort((a,b) => a.name.localeCompare(b.name) )
    }else {
      return hogsArray
    }
  }

  const hogTiles = sortHogs().map(hog => <HogTile hog={hog} />)

  return (
    <div>
      <div>
        <FilterForm 
         handleDropDown={handleDropDown} 
         handleCheckBox={handleCheckBox}
         checkBox={checkBox}
         dropDown={dropDown}
         />
      </div>

      <div className="ui grid container">  
        {hogTiles}
      </div>
    </div>
  )
}

export default HogContainer
