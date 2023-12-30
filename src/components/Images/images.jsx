import "./images.css"
import blur1 from "../../assets/blur-01.png"
import blur3 from "../../assets/blur-03.png"
// import eclip1 from "../../assets/Ellipse 39.png"

const images = () => {
  return (
    <div>
      <img className="blur1 image" src={blur1}/>
      <img className="blur3 image" src={blur3}/>
      {/* <img className="elip1" src={eclip1} alt="" /> */}
    </div>
  )
}

export default images