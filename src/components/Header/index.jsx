import { Link } from 'react-router-dom'
import orangeStar from './../../assets/img/orangeStar.png'

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header_title">
        <img className="header_title_img" src={orangeStar} alt="étoile rose" />
        <h1 className="header_title_text">Axelle Roche</h1>
      </Link>
      <nav className="header_nav">
        <a className="header_nav_link" href="#a-propos">
          A propos
        </a>
        <a className="header_nav_link" href="#projects">
          Projets
        </a>
        <a className="header_nav_link" href="#cv">
          Mon CV
        </a>
        <a className="header_nav_link highlighted" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  )
}
export default Header
