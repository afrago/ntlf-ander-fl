import React from 'react'
import PropTypes from 'prop-types'

function showDocumentation(documentation) {
  return (
    <li>
      <a href={documentation} className="button fit">
        Dokumentazioa
      </a>
    </li>
  )
}
function showApplication(application) {
  return (
    <li>
      <a href={application} className="button fit">
        Android APK
      </a>
    </li>
  )
}
function showSource(source) {
  return (
    <li>
      <a href={source} className="button fit">
        GitHub
      </a>
    </li>
  )
}
function showImage(thumbnail) {
  return <img src={thumbnail} />
}

const ProjectItem = ({
  id,
  thumbnail,
  title,
  description,
  application,
  source,
  documentation,
}) => {
  return (
    <article key={id} className="work-item">
      <div className="row">
        <h1 className="col-12">{title}</h1>
      </div>
      <div className="row">
        <div className="col-md-5 col-12">
          {thumbnail ? showImage(thumbnail) : null}
          <ul className="actions">
            {documentation ? showDocumentation(documentation) : null}
            {source ? showSource(source) : null}
            {application ? showApplication(application) : null}
          </ul>
        </div>
        <div className="col-md-7  col-12">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </article>
  )
}

ProjectItem.displayName = 'Proiektua'
ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
 // thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  application: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  documentation: PropTypes.string.isRequired,
}

export default ProjectItem
