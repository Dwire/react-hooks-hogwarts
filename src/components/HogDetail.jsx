
function HogDetail({specialty, greased, weight}) {
  return (
    <div>
      <p className="subtleText" >Specialty: {specialty}</p>
      <p className="subtleText" >Weight: {weight}</p>
      <p className="subtleText" >Greased: {greased ? "TRUE" : "FALSE"}</p>
    </div>
  )
}

export default HogDetail
