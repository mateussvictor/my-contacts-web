import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

function ReactPortal({ containerId = 'portal-root', children }) {
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', containerId)
    document.body.appendChild(container)
  }

  return ReactDOM.createPortal(children, container)
}

export { ReactPortal }

ReactPortal.propTypes = {
  containerId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
