import "./hero.css"
import group from "../../assets/Group 81.png"
import head from "../../assets/Header Illustration.png"

const hero = () => {
  return (
    <div className="heroMain">
        <div className="hero-txt">
            <h1 className="hero-main">Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <div className="search">
                <input type="text" placeholder="Your Email Address" name="email" id="email" />
                <button>Get Started</button>
            </div>
            <div className="group-photo">
                <img src={group}/>
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div>
            <img className="head-img" src={head}/>
        </div>
    </div>
  )
}

export default hero