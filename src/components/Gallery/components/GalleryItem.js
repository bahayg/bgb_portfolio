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
      <div>
        {type === 'video' ? (
          <iframe
            title="Demo"
            width="373"
            height="210"
            src={source}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ padding: '10px' }}
          ></iframe>
        ) : (
          <a href={url} target="_blank" rel="noreferrer">
            <img src={source} alt={captionSmall} />
          </a>
        )}
      </div>
      {caption ? <h3>{caption}</h3> : <h3>{captionSmall}</h3>}
      <p>{description}</p> <br />
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
          Github Repo
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
  caption: PropTypes.string.isRequired,
  captionSmall: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  frontend: PropTypes.string.isRequired,
  backend: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  //   position: PropTypes.string.isRequired,
  //   toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
