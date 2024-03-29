import { Link } from 'react-router-dom'
import photo1 from './../../assets/img/photo1.jpg'

function Landing() {
  return (
    <div id="landing" className="landing">
      <div className="landing_portfolio">
        <h2 className="landing_portfolio_lines">Portfolio</h2>
        <p className="landing_portfolio_lines outline">Portfolio</p>
        <p className="landing_portfolio_lines outline">Portfolio</p>
        <p className="landing_portfolio_lines outline phone">Portfolio</p>
        <p className="landing_portfolio_lines outline phone">Portfolio</p>
        <p className="landing_portfolio_lines outline phone">Portfolio</p>
      </div>
      <img src={photo1} alt="Portait de moi" className="landing_img" />
      <div className="landing_links">
        <p>
          Github : <Link to="https://github.com/lexayart">lexayart</Link>
        </p>
        <p>
          LinkedIn :{' '}
          <Link to="www.linkedin.com/in/axelle-roche-63b660154">
            Axelle Roche
          </Link>
        </p>
        <p>
          Instagram :{' '}
          <Link to="https://www.instagram.com/roche.axelle/">roche.axelle</Link>
        </p>
      </div>
      <div className="scroll">
        Scroll
        <br />
        down
      </div>
    </div>
  )
}

export default Landing
