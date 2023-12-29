import "./images.css"
import blur1 from "../../assets/blur-01.png"
import blur3 from "../../assets/blur-03.png"

const images = () => {
  return (
    <div>
      <img className="blur1 image" src={blur1}/>
      <img className="blur3 image" src={blur3}/>
    </div>
  )
}

export default images