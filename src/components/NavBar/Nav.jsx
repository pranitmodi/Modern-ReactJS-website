import "./Nav.css"

const Nav = () => {
  return (
    <div className='nav conFlex'>
      <div className='conFlex mid'>
          <h2 className='txt-bold'>GPT-3</h2>
          <h3>Home</h3>
          <h3>What is GPT?</h3>
          <h3>Open AI</h3>
          <h3>Case Studies</h3>
          <h3>Library</h3>
      </div>
      <div className='cta conFlex'>
          <h3>Sign in</h3>
          <button className='navBtn'><h3>Sign up</h3></button>
      </div>
    </div>
  )
}

export default Nav