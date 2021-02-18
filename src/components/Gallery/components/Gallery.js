// import React, { useState, useCallback } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
//import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'

const Gallery = ({ images }) => {
  // const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(0)

  // const toggleLightbox = useCallback(
  //   (selectedIndex) => {
  //     setLightboxIsOpen(!lightboxIsOpen)
  //     setSelectedIndex(selectedIndex)
  //   },
  //   [lightboxIsOpen]
  // )

  return (
    <div>
      {images && (
        <div className="row">
          {images.map((obj, i) => {
            return (
              <GalleryItem
                id={obj.id}
                type={obj.type}
                source={obj.source}
                caption={obj.caption}
                captionSmall={obj.captionSmall}
                description={obj.description}
                tools={obj.tools}
                frontend={obj.frontend}
                backend={obj.backend}
                live={obj.live}
                github={obj.github}
                url={obj.url}
                // position={obj.position}
                // toggleLightbox={obj.toggleLightbox}
                // position={i}
                // toggleLightbox={toggleLightbox}
              />
            )
          })}
        </div>
      )}
      {/* <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        )}
      </ModalGateway> */}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
