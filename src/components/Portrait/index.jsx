import photo2 from './../../assets/img/photo2.jpg'

function Portrait() {
  return (
    <div className="portrait">
      <img src={photo2} className="portrait_img" alt="Axelle Roche" />
      <div className="portrait_description">
        <p>17 mai 1999</p>
        <p>Permis B</p>
        <p>Angers, France</p>
        <p>roche.axelle@yahoo.fr</p>
      </div>
    </div>
  )
}

export default Portrait
