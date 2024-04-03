import Portrait from '../Portrait'
import pinkStar from './../../assets/img/pinkStar.png'
import arrow from './../../assets/img/arrow.png'

function APropos() {
  return (
    <div id="a-propos" className="a-propos">
      <div className="a-propos_content">
        <h2 className="a-propos_content_title">
          Salut&nbsp;!{' '}
          <img
            src={pinkStar}
            alt="étoile rose"
            className="a-propos_content_title_star"
          />{' '}
          <br />
          Moi c'est Axelle
        </h2>
        <p className="a-propos_content_text">
          Originaire de Normandie, j’ai fait un master 2 en design corporate à
          l’ECV Nantes, C’est là-bas que j’ai découvert le développement web
          pour lequel j’ai développé une vraie passion.
        </p>
        <p className="a-propos_content_text">
          C’est donc tout naturellement que j’ai fini par faire une formation
          pour m’y former et devenir développeuse web.
        </p>
        <a
          href="https://www.linkedin.com/in/axelle-roche-63b660154/"
          className="a-propos_content_link"
          target="_blank"
          rel="noreferrer"
        >
          <p>Retrouvez-moi sur LinkedIn</p>
          <img src={arrow} alt="flèche" />
        </a>
      </div>
      <Portrait />
    </div>
  )
}

export default APropos
