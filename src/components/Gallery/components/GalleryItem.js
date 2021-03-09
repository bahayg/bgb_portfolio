import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  type,
  source,
  caption,
  captionSmall,
  description,
  tools,
  frontend,
  backend,
  live,
  github,
  url,
  //   position,
  //   toggleLightbox,
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
      <div className="zoom">
        {type === 'video' ? (
          <iframe
            title="Demo"
            width="343"
            height="210"
            src={source}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ padding: '10px', borderRadius: '15px' }}
          ></iframe>
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <img src={source} alt={captionSmall} />
          </a>
        )}
      </div>
      {caption ? (
        <h3>{caption}</h3>
      ) : (
        <h3 style={{ marginTop: '20px' }}>{captionSmall}</h3>
      )}
      <p style={{ marginBottom: '15px' }}>{description}</p>
      <p>{tools}</p>
      {frontend ? (
        <a href={frontend} target="_blank" rel="noreferrer" className="button">
          Frontend
        </a>
      ) : null}
      {backend ? (
        <a href={backend} target="_blank" rel="noreferrer" className="button">
          Backend
        </a>
      ) : null}
      {live ? (
        <a href={live} target="_blank" rel="noreferrer" className="button">
          Live
        </a>
      ) : null}
      {github ? (
        <a href={github} target="_blank" rel="noreferrer" className="button">
          GitHub Repo
        </a>
      ) : null}
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  caption: PropTypes.string,
  captionSmall: PropTypes.string,
  description: PropTypes.string,
  tools: PropTypes.string,
  frontend: PropTypes.string,
  backend: PropTypes.string,
  live: PropTypes.string,
  github: PropTypes.string,
  url: PropTypes.string,
  //   position: PropTypes.string.isRequired,
  //   toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
