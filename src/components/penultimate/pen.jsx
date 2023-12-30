import "./pen.css"
import Feature from "../../assets/Feature Image.png"

const pen = () => {
  return (
    <div className="main">
        <div className="firstDiv">
            <div className="image">
                <img src={Feature} alt="" />
            </div>
            <div className="content">
                <p className="first">Request Early Access to Get Started</p>
                <h1>The possibilities are beyond your imagination</h1>
                <p className="second">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className="third">Request Early Access to Get Started</p>
            </div>
        </div>
        <div className="nextDiv">
            <div className="txt">
                <p>Request Early Access to Get Started</p>
                <h2>Register today & start exploring the endless possiblities.</h2>
            </div>
            <button>Get Started</button>
        </div>
        <h1 className="main-txt">A lot is happening,</h1>
        <h1 className="main-txt last">We are blogging about it.</h1>
    </div>
  )
}

export default pen