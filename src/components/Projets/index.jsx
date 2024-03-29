import projets from './../../data/projets.json'
import orangeStar from './../../assets/img/orangeStar.png'
import Modal from '../Modal'
import { useState } from 'react'

function Projets() {
  // Use an object to store modal states for each project
  const [modalStates, setModalStates] = useState({})

  // Function to toggle modal state for a specific project
  const toggleModal = (projectId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [projectId]: !prevStates[projectId],
    }))
  }

  return (
    <div id="projects" className="projets">
      <h2 className="projects_title outline">
        <img
          src={orangeStar}
          alt="étoile orange"
          className="projects_title_star"
        />{' '}
        Mes Projets
      </h2>
      <div className="projects">
        {projets.map((projet) => (
          <div
            key={projet.id}
            className="projects_project"
            onClick={() => toggleModal(projet.id)}
          >
            <img
              src={projet.cover}
              alt="cover du projet"
              className="projects_project_img"
            />
            <div className="projects_project_background"></div>
            <div className="projects_project_caption">
              <h3 className="projects_project_caption_title">{projet.title}</h3>
              <ul className="projects_project_caption_technos">
                {projet.technos.map((techno) => (
                  <li
                    key={techno}
                    className="projects_project_caption_technos_techno"
                  >
                    {techno}
                  </li>
                ))}
              </ul>
              <p className="projects_project_caption_description">
                {projet.description}
              </p>
            </div>
            <Modal
              title={projet.title}
              pictures={projet.pictures}
              description={projet.description}
              technos={projet.technos}
              github={projet.github}
              toggleModal={() => toggleModal(projet.id)} // Pass project id to toggleModal
              modal={modalStates[projet.id]} // Use modal state for the specific project
            />
          </div>
        ))}
        <div className="projects_project">
          <p className="projects_project_last">
            Et bien d’autres
            <br />à venir...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projets
