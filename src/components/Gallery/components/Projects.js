import React from 'react'
import PropTypes from 'prop-types'
import ProjectItem from './ProjectItem'
import { PROJECTS_INFO } from '../constants/projectsinfo'

const Gallery = ({ images = PROJECTS_INFO }) => {

  return (
    <div>
      {images && (<div className="row">
        {images.map((obj, i) => {
        return (<ProjectItem
          id={obj.id}
          thumbnail={obj.thumbnail}
          title={obj.title}
          description={obj.description}
          application={obj.application}
          source={obj.source}
          documentation={obj.documentation}
        />); 
        })}
        </div>
      )}
    </div>
  )
}

Gallery.displayName = 'Proiektuak'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
