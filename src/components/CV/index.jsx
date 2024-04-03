import whiteStar from './../../assets/img/whiteStar.png'
import orangeStar from './../../assets/img/orangeStar.png'
import art from './../../assets/img/art.png'
import music from './../../assets/img/music.png'
import crochet from './../../assets/img/crochet.png'
import games from './../../assets/img/games.png'
import book from './../../assets/img/book.png'
import ps from './../../assets/img/ps.png'
import ai from './../../assets/img/ai.png'
import id from './../../assets/img/id.png'
import pr from './../../assets/img/pr.png'
import ae from './../../assets/img/ae.png'
import figma from './../../assets/img/figma.png'

function Cv() {
  return (
    <div id="cv" className="cv">
      <img src={whiteStar} alt="étoile blanche" className="transition-star" />
      <div>
        <h2 className="outline col1">
          Curriculum Vitae <img src={whiteStar} alt="" />
        </h2>
        <div className="cv_competences col1">
          <h3 className="cv_subtitle">Compétences techniques</h3>
          <div className="cv_technical">
            <div className="cv_technical_column">
              <h4 className="cv_uppercase">Logiciels</h4>
              <div className="cv_technical_softwares">
                <div>
                  <img
                    src={ps}
                    alt="Photoshop"
                    className="cv_technical_softwares_one"
                  />
                  <img
                    src={ai}
                    alt="Illustrator"
                    className="cv_technical_softwares_one"
                  />
                  <img
                    src={id}
                    alt="InDesign"
                    className="cv_technical_softwares_one"
                  />
                </div>
                <div>
                  <img
                    src={pr}
                    alt="PremierePro"
                    className="cv_technical_softwares_one"
                  />
                  <img
                    src={ae}
                    alt="AfterEffects"
                    className="cv_technical_softwares_one"
                  />
                  <img
                    src={figma}
                    alt="Figma"
                    className="cv_technical_softwares_one"
                  />
                </div>
              </div>
            </div>
            <div className="cv_technical_column">
              <h4 className="cv_uppercase">Programmation</h4>
              <ul>
                <div className="cv_technical_prog">
                  <div>
                    <li className="cv_text">HTML</li>
                    <li className="cv_text">CSS/SCSS</li>
                    <li className="cv_text">JavaScript</li>
                  </div>
                  <div>
                    <li className="cv_text">React</li>
                    <li className="cv_text">NodeJS</li>
                    <li className="cv_text">Express</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <ul className="cv_qualities">
            <li className="cv_tag cv_quality">Résolution de problèmes</li>
            <li className="cv_tag cv_quality">Persévérance</li>
            <li className="cv_tag cv_quality">Adaptabilité</li>
            <li className="cv_tag cv_quality">
              Capacité à travailler sous pression
            </li>
            <li className="cv_tag cv_quality">Travail d'équipe</li>
          </ul>
        </div>
        <div className="cv_blanc col1">
          <div>
            <h3 className="cv_subtitle">Langues parlées</h3>
            <div>
              <h4 className="cv_uppercase">Français</h4>
              <div className="cv_langage-container">
                <p className="cv_tag cv_langage cv_french">Langue maternelle</p>
              </div>
            </div>
            <div>
              <h4 className="cv_uppercase">Anglais</h4>
              <div className="cv_langage-container">
                <p className="cv_tag cv_langage cv_english">Courant</p>
              </div>
            </div>
            <div>
              <h4 className="cv_uppercase">Allemand</h4>
              <div className="cv_langage-container">
                <p className="cv_tag cv_langage cv_german">Notions</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="cv_subtitle">Centres d'intérêt</h3>
            <div className="cv_interests">
              <div className="cv_interest">
                <div className="cv_icon">
                  <img src={art} alt="icone de peinture" />
                </div>
                <div className="cv_interest_caption">
                  <h4 className="cv_uppercase">L'art</h4>
                  <p className="cv_text">(peinture, sculpture, musique)</p>
                </div>
              </div>
              <div className="cv_interest">
                <div className="cv_icon">
                  <img src={music} alt="icone de musique" />
                </div>
                <div className="cv_interest_caption">
                  <h4 className="cv_uppercase">La musique</h4>
                  <p className="cv_text">(rock, pop, techno)</p>
                </div>
              </div>
              <div className="cv_interest">
                <div className="cv_icon">
                  <img src={crochet} alt="icone de chrochet" />
                </div>
                <div className="cv_interest_caption">
                  <h4 className="cv_uppercase">Le crochet</h4>
                  <p className="cv_text">
                    (vêtements, accessoires, décoration)
                  </p>
                </div>
              </div>
              <div className="cv_interest">
                <div className="cv_icon">
                  <img src={games} alt="icone de console" />
                </div>
                <div className="cv_interest_caption">
                  <h4 className="cv_uppercase">Les jeux vidéo</h4>
                  <p className="cv_text">(narratifs, aventure, casse-tête)</p>
                </div>
              </div>
              <div className="cv_interest">
                <div className="cv_icon">
                  <img src={book} alt="icone de livre" />
                </div>
                <div className="cv_interest_caption">
                  <h4 className="cv_uppercase">La lecture</h4>
                  <p className="cv_text">
                    (fantasy, dystopie, mangas d’horreur)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parcours">
        <div className="formations">
          <h3 className="cv_subtitle">Formations</h3>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2023-2024
            </h4>
            <div className="parcours_border">
              <p className="cv_text">Diplôme développeur web,</p>
              <p className="cv_text">OpenClassroom</p>
            </div>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2016-2021
            </h4>
            <div className="parcours_border">
              <p className="cv_text">
                Master 2 Design Graphique Spécialité design corporate,
              </p>
              <p className="cv_text">ECV Nantes</p>
            </div>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2016
            </h4>
            <div className="parcours_border">
              <p className="cv_text">
                Baccalauréat scientifique spécialité Initiation aux Sciences du
                Numérique,
              </p>
              <p className="cv_text">Lycée Notre Dame Le Mans</p>
            </div>
          </div>
        </div>
        <div className="parcours_experiences">
          <h3 className="cv_subtitle">Expériences</h3>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2023-2023
            </h4>
            <div className="parcours_border">
              <p className="cv_text">Vendeuse au rayon cuisine</p>
              <p className="cv_text">Leroy merlin, Angers</p>
              <p className="cv_text">
                Elaboration et suivi de projets cuisine, Tenue d’un sous-rayon
              </p>
            </div>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2021-2022
            </h4>
            <div className="parcours_border">
              <p className="cv_text">Hôtesse de caisse</p>
              <p className="cv_text">E. Leclerc, Le Mans</p>
              <p className="cv_text">
                Encaissement et renseignement des clients
              </p>
            </div>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2021
            </h4>
            <div className="parcours_border">
              <p className="cv_text">Stagiaire directrice artistique</p>
              <p className="cv_text">Rockdev, Paris</p>
              <p className="cv_text">
                Design d’application mobile, Illustration de jeux vidéo
              </p>
            </div>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2020
            </h4>
            <div className="parcours_border">
              <p className="cv_text">Stagiaire graphiste</p>
              <p className="cv_text">Mano, Le Mans</p>
              <p className="cv_text">
                Contribution à la création d’un catalogue, Création de
                pictogrammes
              </p>
            </div>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2019
            </h4>
            <div className="parcours_border">
              <p className="cv_text">Stagiaire graphiste</p>
              <p className="cv_text">Studio Caméléon, Saint Herblain</p>
              <p className="cv_text">
                Création de supports de communication selon un cahier des
                charges
              </p>
            </div>
          </div>
        </div>
        <div className="parcours_divers">
          <h3 className="cv_subtitle">Divers</h3>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2016
            </h4>
            <p className="cv_text parcours_border parcours_border_green">
              Score de 865/990 au TOEIC
            </p>
          </div>
          <div>
            <h4 className="cv_uppercase">
              <img
                src={orangeStar}
                alt="étoile"
                className="parcours_orange-star"
              />
              2016
            </h4>
            <p className="cv_text parcours_border parcours_border_green">
              Obtention du projet Voltaire
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cv
