import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h2 className="error_title">404</h2>
      <Link to="/" className="error_link">
        Retourner à l'écran d'accueil
      </Link>
    </div>
  )
}

export default Error
