import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import MessageDragAndDrog from './messageDragAndDrog'

function DragAndDrogContent({ dragging, isInvalidFile }: InferProps<typeof DragAndDrogContent.propTypes>) {

  return (
    <div>
      {/* image && <img src={image} alt="imagen a cargar" /> */}
      <h4 className="title">Upload your image</h4>
      <p className="sub-title"> File should be Jpeg, Png,... </p>
      <MessageDragAndDrog dragging={dragging} />
      {isInvalidFile && <h6>Error type file</h6>}
      <p className="or">Or</p>
      <button className="btn-primary button-choose-file">Choose a file</button>
    </div>
  )
}

DragAndDrogContent.propTypes = {
  dragging: PropTypes.bool.isRequired,
  isInvalidFile: PropTypes.bool.isRequired,
}

export default DragAndDrogContent
