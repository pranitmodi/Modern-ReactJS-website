import './App.css'
import Nav from './components/NavBar/Nav'
import Images from "./components/Images/images"
import Hero from "./components/hero/hero"
import divider from "./assets/Comapnies Logo.png"
import Mid from './components/mid/mid'
import Pen from './components/penultimate/pen'
import Section from './components/sections/section'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <div className='mainDiv'>
        <Nav/>
        <Hero/>
          <div className='divider'>
            <img src={divider}/>
          </div>
        <Mid/>
        <Pen />
        <Section/>
        <Images />
      </div>
      <Footer/>
    </>
  )
}

export default App
