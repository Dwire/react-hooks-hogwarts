// import { useState } from "react";
import HogTile from "./HogTile.jsx";

function FilterForm({handleCheckBox, handleDropDown, checkBox, dropDown}) {
  return (
    <form>
      <input type="checkbox" checked={checkBox ? "true" : ""} onChange={handleCheckBox} />

      <select onChange={handleDropDown} value={dropDown} >
        <option value="All">All</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
    </form>
  )
}

export default FilterForm
