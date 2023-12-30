import Comp from "./comp"
import "./section.css"
import Reactbig from "./assets/Rect big.png"
import Img1 from "./assets/Rect small 1.png"
import Img2 from "./assets/Rect small 2.png"
import Img3 from "./assets/Rect small 3.png"
import Img4 from "./assets/Rect small 4.png"

const section = () => {
  return (
    <div className="section-main">
        <div className="first ele1">
            <img src={Reactbig} alt="" />
            <Comp/>
        </div>
        <div className="second">
            <div className="ele1 ok">
                <img src={Img1} alt="" />
                <Comp/>
            </div>
            <div className="ele1 ok">
                <img src={Img2} alt="" />
                <Comp/>
            </div>
        </div>
        <div className="third">
            <div className="ele1 ok">
                <img src={Img3} alt="" />
                <Comp/>
            </div>
            <div className="ele1 ok">
                <img src={Img4} alt="" />
                <Comp/>
            </div>
        </div>
    </div>
  )
}

export default section