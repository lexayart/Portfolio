import arrow from './../../assets/img/arrow.png'
import { useState, useEffect } from 'react'

function Slideshow(pictures) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lateralSlideshow = document.querySelector(
      '.slideshow_gallery_content',
    )
    lateralSlideshow.style.transform = `translateX(${index}00%)`
  }, [index])

  function nextImage() {
    if (index === pictures.pictures.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  function previousImage() {
    if (index === 0) {
      setIndex(pictures.pictures.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className="slideshow">
      <div className="slideshow_gallery">
        <div className="slideshow_gallery_content">
          {pictures.pictures.map((photo) => (
            <img
              src={photo}
              alt={`différentes vues de l'appartement` + photo.id}
              key={photo}
              className="slideshow_gallery_content_img"
            />
          ))}
        </div>
      </div>

      {pictures.pictures.length !== 1 && (
        <div>
          <img
            src={arrow}
            className="slideshow_arrow slideshow_arrow_left"
            alt="flèche précédent"
            onClick={previousImage}
            role="button"
          />
          <img
            src={arrow}
            className="slideshow_arrow slideshow_arrow_right"
            alt="flèche suivant"
            onClick={nextImage}
            role="button"
          />
          <p className="slideshow_numbering">
            {index + 1}/{pictures.pictures.length}
          </p>
        </div>
      )}
    </div>
  )
}

export default Slideshow
