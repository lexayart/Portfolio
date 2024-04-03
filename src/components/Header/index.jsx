import { Link } from 'react-router-dom'
import orangeStar from './../../assets/img/orangeStar.png'
import { useState } from 'react'
import menuIcon from './../../assets/img/menu.png'

function Header() {
  const [navState, setNavState] = useState(false)

  const toggleNav = () => {
    setNavState(!navState)
  }

  const closeNav = () => {
    setNavState(false)
  }

  return (
    <div className="header">
      <Link to="/" className="header_title">
        <img className="header_title_img" src={orangeStar} alt="étoile rose" />
        <h1 className="header_title_text">Axelle Roche</h1>
      </Link>
      <img
        src={menuIcon}
        alt="icone du menu"
        onClick={toggleNav}
        className="header_burger"
      />
      <nav
        className={`header_nav ${navState ? 'header_open' : 'header_close'}`}
      >
        <a className="header_nav_link" href="#a-propos" onClick={closeNav}>
          A propos
        </a>
        <a className="header_nav_link" href="#projects" onClick={closeNav}>
          Projets
        </a>
        <a className="header_nav_link" href="#cv" onClick={closeNav}>
          Mon CV
        </a>
        <a
          className="header_nav_link highlighted"
          href="#contact"
          onClick={closeNav}
        >
          Contact
        </a>
      </nav>
    </div>
  )
}
export default Header
