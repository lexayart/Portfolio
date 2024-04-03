import whiteStar from './../../assets/img/whiteStar.png'

function Modal({
  title,
  pictures,
  description,
  technos,
  github,
  toggleModal,
  modal,
  problematics,
}) {
  const handleCloseModal = (e) => {
    e.stopPropagation() // Prevent event propagation to parent elements
    toggleModal() // Close the modal
  }
  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="modal_header">
              <h3 className="modal_title">{title}</h3>

              <a
                href={github}
                className="modal_github"
                target="blank_"
                rel="noreferrer"
              >
                Github
              </a>
            </div>

            <ul className="modal_techno_list">
              {technos.map((techno) => (
                <li className="modal_techno" key={techno}>
                  {techno}
                </li>
              ))}
            </ul>
            <p className="modal_description">{description}</p>
            <p className="modal_description">{problematics}</p>
            <img
              src={whiteStar}
              alt="croix pour quitter la modale"
              className="close-modal"
              onClick={handleCloseModal}
            ></img>
            <div className="modal_img_container">
              {pictures.map((photo) => (
                <img
                  src={photo}
                  alt="maquettes du site"
                  key={photo}
                  className="modal_img"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
