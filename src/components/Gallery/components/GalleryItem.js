import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  source,
  thumbnail,
  caption,
  description,
  frontend,
  backend,
  live,
  github,
  position,
  toggleLightbox,
}) => {
  //   const onClick = useCallback(
  //     (e) => {
  //       e.preventDefault()
  //       toggleLightbox(position)
  //     },
  //     [position, toggleLightbox]
  //   )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <div>
        <iframe
          width="373"
          height="210"
          src={source}
          //   poster={thumbnail}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ padding: '10px' }}
        ></iframe>
      </div>

      {/* <a
        className="image fit thumb"
        href={source}
        target="_blank"
        //onClick={onClick}
      >
        <img src={thumbnail} />
      </a> */}

      <h3>{caption}</h3>
      <p>{description}</p>

      {frontend ? (
        <a href={frontend} target="_blank" className="button">
          Frontend
        </a>
      ) : null}

      {backend ? (
        <a href={backend} target="_blank" className="button">
          Backend
        </a>
      ) : null}
      {live ? (
        <a href={live} target="_blank" className="button">
          Live
        </a>
      ) : null}
      {github ? (
        <a href={github} target="_blank" className="button">
          Github Repo
        </a>
      ) : null}
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  frontend: PropTypes.string.isRequired,
  backend: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
