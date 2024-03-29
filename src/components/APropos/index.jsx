import { Link } from 'react-router-dom'
import Portrait from '../Portrait'
import pinkStar from './../../assets/img/pinkStar.png'

function APropos() {
  return (
    <div id="a-propos" className="a-propos">
      <div className="a-propos_content">
        <h2 className="a-propos_content_title">
          Salut !{' '}
          <img
            src={pinkStar}
            alt="étoile rose"
            className="a-propos_content_title_star"
          />{' '}
          <br />
          Moi c'est Axelle
        </h2>
        <p className="a-propos_content_text">
          Je viens de Normandie et ma passion c’est le saucisson. J’ai fait un
          master 2 en design corporate à l’ECV Nantes, C’est là-bas que j’ai
          découvert le développement web pour lequel j’ai développé une vraie
          passion.
        </p>
        <p className="a-propos_content_text">
          C’est donc tout naturellement que j’ai fini par faire une formation
          pour m’y former et devenir développeuse web.
        </p>
        <Link
          to={{ pathname: 'www.linkedin.com/in/axelle-roche-63b660154' }}
          target="_blank"
        >
          <p className="a-propos_content_link">Retrouvez-moi sur LinkedIn</p>
        </Link>
      </div>
      <Portrait />
    </div>
  )
}

export default APropos
